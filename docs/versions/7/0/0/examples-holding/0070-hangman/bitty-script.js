const words = [
  "toolkit",
  "website",
  "creator",
  "builder",
  "browser",
  "hypertext",
];

const hangmanTemplates = {
  loser:
    `<div>You Lost... <button data-send="hangmanStartGame">Play Again</button></div>`,
  input:
    `<label>Guess:<input data-send="hangmanGuess" type="text" size="3" /></label>`,
  winner:
    `<div>You Won! <button data-send="hangmanStartGame">Play Again</button></div>`,
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function misses(word, guesses) {
  const letters = new Set(word.split(""));
  return guesses.difference(letters);
}

function hasWon(word, guesses) {
  const letters = new Set(word.split(""));
  return letters.isSubsetOf(guesses);
}

const svgs = [];

window.Hangman = class {
  #wordIndex = -1;
  #guesses = null;
  #maxGuesses = 6;

  async bittyInit() {
    for (let index = 0; index <= 6; index += 1) {
      const url = `/[@ version_dir @]/svgs/hangman/hangman-${index}.svg`;
      const resp = await this.api.getSVG(url);
      if (resp.value) {
        svgs.push(resp.value);
      } else {
        console.error(`Could not get SVG at: ${url}`);
      }
    }
  }

  bittyReady() {
    this.api.trigger("hangmanStartGame");
  }

  hangmanStartInterface(_ev, el) {
    el.replaceChildren(this.api.makeHTML(hangmanTemplates.start));
  }

  hangmanStartGame(_ev, el) {
    this.#wordIndex += 1;
    if (this.#wordIndex >= words.length) {
      this.#wordIndex = 0;
    }
    this.#guesses = new Set();
    this.api.trigger("hangmanUpdate");
  }

  hangmanUpdate(_ev, _el) {
    this.api.trigger(`
      hangmanGallows 
      hangmanDisplay 
      hangmanInterface
      hangmanMisses`);
  }

  hangmanGallows(_, el) {
    const missCount = misses(
      words[this.#wordIndex],
      this.#guesses,
    ).size;

    el.replaceChildren(svgs[missCount]);

    //el.replaceChildren(svgs[this.#guesses.length - 1]);

    // el.innerHTML = misses(
    //   words[this.#wordIndex],
    //   this.#guesses,
    // ).size;
  }

  async hangmanGuess(ev, _el) {
    if (ev.target.value !== "") {
      ev.target.readOnly = true;
      this.#guesses.add(ev.target.value);
      this.api.trigger("hangmanUpdate");
      await sleep(100);
      ev.target.value = "";
      ev.target.readOnly = false;
    }
  }

  hangmanMisses(_ev, el) {
    const missList = [
      ...misses(
        words[this.#wordIndex],
        this.#guesses,
      ).values(),
    ];
    el.innerHTML = `Misses: ${missList.sort()}`;
  }

  hangmanDisplay(_ev, el) {
    const output = words[this.#wordIndex].split("").map((letter) => {
      if (this.#guesses.has(letter)) {
        return letter;
      } else {
        return "_";
      }
    });
    el.innerHTML = output.join(" ");
  }

  hangmanInterface(_ev, el) {
    const word = words[this.#wordIndex];
    if (misses(word, this.#guesses).size === this.#maxGuesses) {
      el.replaceChildren(this.api.makeHTML(hangmanTemplates.loser));
    } else if (hasWon(word, this.#guesses)) {
      el.replaceChildren(this.api.makeHTML(hangmanTemplates.winner));
    } else if (this.#guesses.size === 0) {
      el.replaceChildren(this.api.makeHTML(hangmanTemplates.input));
    }
  }
};

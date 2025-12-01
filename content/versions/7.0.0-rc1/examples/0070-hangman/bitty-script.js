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

window.Hangman = class {
  #wordIndex = -1;
  #guesses = null;
  #maxGuesses = 6;

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

  hangmanGallows(_ev, el) {
    el.innerHTML = misses(
      words[this.#wordIndex],
      this.#guesses,
    ).size;
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

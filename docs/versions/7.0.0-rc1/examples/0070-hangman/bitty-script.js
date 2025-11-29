const words = ["toolkit", "website", "creator", "builder", "maker"];

const templates = {
  gameover:
    `<div>Game Over - <button data-send="hangmanStartGame">Restart</button></div>`,
  input:
    `<label>Guess:<input data-send="hangmanGuess" type="text" size="3" /></label>`,
  start: `<button data-send="hangmanStartGame">Start Game</button>`,
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function countMisses(word, guesses) {
  const letters = new Set(word.split(""));
  return guesses.difference(letters).size;
}

function hasWon(word, guesses) {
  const letters = new Set(word.split(""));
  return letters.isSubsetOf(guesses);
}

export default class {
  #wordIndex = -1;
  #guesses = null;

  bittyReady() {
    this.api.querySelector("button").click();
  }

  hangmanStartInterface(_ev, el) {
    el.replaceChildren(this.api.makeHTML(templates.start));
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
    this.api.trigger("hangmanGallows hangmanDisplay hangmanInterface");
  }

  hangmanGallows(_ev, el) {
    const misses = countMisses(
      words[this.#wordIndex],
      this.#guesses,
    );
    el.innerHTML = misses;
  }

  async hangmanGuess(ev, _el) {
    if (ev.stringValue !== "") {
      ev.target.readOnly = true;
      this.#guesses.add(ev.stringValue);
      this.api.trigger("hangmanUpdate");
      await sleep(100);
      ev.target.value = "";
      ev.target.readOnly = false;
    }
  }

  // hangmanGuess(ev, _el) {
  //   this.#guesses.add(ev.stringValue);
  //   this.api.trigger("hangmanGallows hangmanDisplay");
  // }

  hangmanDisplay(_ev, el) {
    el.innerHTML = "asdf";
  }

  hangmanInterface(_ev, el) {
    const word = words[this.#wordIndex];
    if (countMisses(word, this.#guesses) === 4) {
      el.replaceChildren(this.api.makeHTML(templates.gameover));
    }

    if (this.#guesses.size === 0) {
      el.replaceChildren(this.api.makeHTML(templates.input));
    }
    //   if (this.#playing === "playing") {
    //     el.replaceChildren(this.api.makeHTML(inputTemplate));
    //   } else if (this.#playing === "over") {
    //     el.replaceChildren(this.api.makeHTML(gameOverTemplate));
    //   }
  }

  // hangmanRestart(_ev, el) {
  //   this.#playing = "playing";
  //   this.#guesses = new Set();
  //   this.api.trigger(`
  //     hangmanInterface
  //     hangmanGallows
  //     hangmanDisplay`);
  // }

  // hangmanGallows(_ev, el) {
  //   let misses = 0;
  //   this.#guesses.forEach((guess) => {
  //     if (!this.#letters.includes(guess)) {
  //       misses += 1;
  //     } else {
  //       this.#matches.add(guess);
  //     }
  //   });
  //   el.innerHTML = misses;
  //   if (misses === 5) {
  //     this.#playing = "over";
  //     this.api.trigger("hangmanInterface");
  //   }
  // }

  // hangmanDisplay(_ev, el) {
  //   const output = this.#letters.map((letter) => {
  //     if (this.#guesses.has(letter)) {
  //       return letter;
  //     } else {
  //       return "_";
  //     }
  //   });
  //   el.innerHTML = output.join(" ");
  // }

  //
}

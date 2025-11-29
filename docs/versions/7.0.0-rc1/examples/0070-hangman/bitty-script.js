const startTemplate = `
<button data-send="hangmanStartGame">Start Game</button> 
`;
const inputTemplate = `
<label>Guess:
<input data-send="hangmanLetter" type="text" size=3" />
</label>`;

const gameOverTemplate = `
<div>Game Over - <button data-send="hangmanRestart">Restart</button></div>
`;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  #letters = "football".split("");
  #matches = new Set();
  #guesses = new Set();
  #playing = "starting";

  bittyInit() {
    //this.api.trigger("hangmanInterface");
  }

  bittyReady() {
    //this.api.trigger("hangmanGallows hangmanDisplay");
  }

  hangmanStartButton(_ev, el) {
    el.replaceChildren(this.api.makeHTML(startTemplate));
  }

  hangmanStartGame(_ev, el) {
    this.#playing = "playing";
    this.api.trigger("hangmanGallows hangmanDisplay hangmanInterface");
  }

  hangmanInterface(_ev, el) {
    if (this.#playing === "playing") {
      el.replaceChildren(this.api.makeHTML(inputTemplate));
    } else if (this.#playing === "over") {
      el.replaceChildren(this.api.makeHTML(gameOverTemplate));
    }
  }

  hangmanRestart(_ev, el) {
    this.#playing = "playing";
    this.#guesses = new Set();
    this.api.trigger(`
      hangmanInterface
      hangmanGallows
      hangmanDisplay`);
  }

  hangmanGallows(_ev, el) {
    let misses = 0;
    this.#guesses.forEach((guess) => {
      if (!this.#letters.includes(guess)) {
        misses += 1;
      } else {
        this.#matches.add(guess);
      }
    });
    el.innerHTML = misses;
    if (misses === 5) {
      this.#playing = "over";
      this.api.trigger("hangmanInterface");
    }
  }

  hangmanDisplay(_ev, el) {
    const output = this.#letters.map((letter) => {
      if (this.#guesses.has(letter)) {
        return letter;
      } else {
        return "_";
      }
    });
    el.innerHTML = output.join(" ");
  }

  async hangmanLetter(ev, _el) {
    if (ev.stringValue !== "") {
      ev.target.readOnly = true;
      this.#guesses.add(ev.stringValue);
      this.api.trigger("hangmanDisplay hangmanGallows");
      await sleep(100);
      ev.target.value = "";
      ev.target.readOnly = false;
    }
  }
}

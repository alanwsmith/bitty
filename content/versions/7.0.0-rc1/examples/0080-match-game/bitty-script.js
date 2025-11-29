const templates = {
  tile: `
<button 
  data-state="hide" 
  data-pair="PAIR_NUM" 
  data-use="matchGameMakePick"
  data-receive="matchGameUpdateTile"
>PAIR_NUM</button>`,
  winner:
    `<div>You Win! <button data-send="matchGameGrid">Play Again</button></div>`,
};

function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

export default class {
  #tries = [];
  #turns = 0;
  #matchCount = 0;
  #tileCount = 20;

  matchGameGrid(ev, el) {
    this.#turns = 0;
    this.#matchCount = 0;
    const nums = [];
    [...Array(this.#tileCount / 2)].forEach((i, indx) => {
      nums.push(indx);
      nums.push(indx);
    });
    shuffleArray(nums);
    el.replaceChildren();
    [...Array(this.#tileCount)].forEach((_) => {
      const subs = [
        ["PAIR_NUM", nums.pop()],
      ];
      el.appendChild(this.api.makeHTML(templates.tile, subs));
    });
    this.api.trigger("matchGameStatus");
  }

  matchGameMakePick(_ev, el) {
    if (
      el.stringData("state") === "hide" || el.stringData("state") === "miss"
    ) {
      el.dataset.state = "try";
      this.#tries.push(el.intData("pair"));
    } else if (el.stringData("state") === "try") {
      el.dataset.state = "hide";
      this.#tries.pop();
    }
    this.api.trigger(`
      matchGameUpdateTile
      matchGameClearTries
      matchGameStatus
    `);
  }

  matchGameUpdateTile(_ev, el) {
    if (
      this.#tries.length === 2 &&
      this.#tries.includes(el.intData("pair"))
    ) {
      if (
        this.#tries[0] === this.#tries[1]
      ) {
        el.dataset.state = "match";
        this.#matchCount += 1;
      } else {
        if (el.stringData("state") === "try") {
          el.dataset.state = "miss";
        }
      }
    } else {
      if (el.stringData("state") === "miss") {
        el.dataset.state = "hide";
      }
    }
  }

  matchGameClearTries(_ev, _el) {
    if (this.#tries.length === 2) {
      this.#turns += 1;
      this.#tries = [];
    }
  }

  matchGameStatus(_ev, el) {
    if (this.#turns === 0) {
      el.innerHTML = "Ready";
    } else {
      if (this.#matchCount === this.#tileCount) {
        el.replaceChildren(this.api.makeHTML(templates.winner));
      } else {
        el.innerHTML = `Turns: ${this.#turns}`;
      }
    }
  }
}

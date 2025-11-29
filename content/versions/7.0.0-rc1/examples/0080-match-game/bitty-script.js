const templates = {
  startButton: `<button data-send="matchGameGrid">Start Game</button>`,
  tile:
    `<button data-state="hide" data-set="SET" data-send="matchGameMakePick" data-receive="matchGameMakePick">SET</button>`,
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
  #currentPicks = null;

  bittyInit() {
    this.api.trigger("matchGameStartButton");
  }

  bittyReady() {
    // tmp auto-start
    this.api.querySelector("button").click();
  }

  matchGameStartButton(_ev, el) {
    el.replaceChildren(this.api.makeHTML(templates.startButton));
  }

  matchGameGrid(_ev, el) {
    const nums = [];
    [...Array(18)].forEach((i, indx) => {
      nums.push(indx);
      nums.push(indx);
    });
    shuffleArray(nums);
    el.replaceChildren();
    for (let row = 0; row < 6; row += 1) {
      for (let col = 0; col < 6; col += 1) {
        const subs = [
          ["SET", nums.pop()],
        ];
        el.appendChild(this.api.makeHTML(templates.tile, subs));
      }
    }
  }

  matchGameMakePick(_ev, el) {
    if (this.#currentPicks.length === 0 && el.isSender) {
      el.dataset.state = "try";
    }
  }

  matchGameUpdateTile(_ev, el) {
  }
}

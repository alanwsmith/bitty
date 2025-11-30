const templates = {
  tile: `
<button 
  class="tile-button"
  data-state="hide" 
  data-pair="PAIR_NUM" 
  data-index="INDEX"
  data-use="matchGameMakePick"
  data-receive="matchGameUpdateTile"
>?</button>`,
  winner:
    `<div>Turns: TURNS - Winner!<br /><button data-send="matchGameGrid">Play Again</button></div>`,
};

const sourceHeads = [];
const sourceFaces = [];

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
  #heads = [];
  #faces = [];

  async bittyInit() {
    for (let i = 0; i < 10; i += 1) {
      const headURL = `/versions/7.0.0-rc1/svgs/heads/${i}.svg`;
      const headResponse = await this.api.getTXT(headURL);
      if (headResponse.value) {
        sourceHeads.push(headResponse.value);
      }
      const faceURL = `/versions/7.0.0-rc1/svgs/faces/${i}.svg`;
      const faceResponse = await this.api.getTXT(faceURL);
      if (faceResponse.value) {
        sourceFaces.push(faceResponse.value);
      }
    }
  }

  matchGameGrid(ev, el) {
    this.#turns = 0;
    this.#matchCount = 0;
    this.#heads = [];
    this.#faces = [];
    const nums = [];
    [...Array(this.#tileCount / 2)].forEach((i, indx) => {
      nums.push(indx);
      nums.push(indx);
    });
    shuffleArray(nums);
    el.replaceChildren();
    [...Array(this.#tileCount)].forEach((_, index) => {
      const num = nums.pop();
      const subs = [
        ["INDEX", index],
        ["PAIR_NUM", num],
      ];
      el.appendChild(
        this.api.makeHTML(templates.tile, subs),
      );
      const head = this.api.makeSVG(sourceHeads[num]);
      head.classList.add("svg-head");
      this.#heads.push(head);
      const face = this.api.makeSVG(sourceFaces[num]);
      face.classList.add("svg-face");
      this.#faces.push(face);
    });
    this.api.trigger("matchGameStatus");
  }

  matchGameMakePick(_ev, el) {
    if (
      el.ds("state") === "hide" || el.ds("state") === "miss"
    ) {
      el.dataset.state = "try";
      this.#tries.push(el.dsInt("pair"));
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
      this.#tries.includes(el.dsInt("pair"))
    ) {
      if (
        this.#tries[0] === this.#tries[1]
      ) {
        el.dataset.state = "match";
        this.#matchCount += 1;
      } else {
        if (el.ds("state") === "try") {
          el.dataset.state = "miss";
        }
      }
    } else {
      if (el.ds("state") === "miss") {
        el.dataset.state = "hide";
      }
    }
    if (
      el.ds("state") === "hide"
    ) {
      el.innerHTML = "?";
    } else {
      el.replaceChildren();
      el.appendChild(this.#heads[el.dsInt("index")]);
      el.appendChild(this.#faces[el.dsInt("index")]);
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
        const subs = [
          ["TURNS", this.#turns],
        ];
        const winner = this.api.makeHTML(templates.winner, subs);
        el.replaceChildren(winner);
      } else {
        el.innerHTML = `Turns: ${this.#turns}`;
      }
    }
  }
}

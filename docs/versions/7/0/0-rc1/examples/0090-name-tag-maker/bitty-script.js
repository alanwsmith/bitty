const nameTagTemplates = {
  colorBlock: `
<div 
  class="name-tag-color-block"
  style="--color: COLOR"
  data-color="COLOR"
  data-send="updateNameTagColor"
  data-receive="updateNameTagColor"></div>`,

  colorStyle: `
.name-tag-color-COLOR {
  background-color: COLOR;
}`,

  nameTag: `
<div class="name-tag-wrapper" style="--color: COLOR">
  <div class="name-tag-hello" style="--color: COLOR">Hello, my name is:</div>
  <div class="name-tag-name">NAME</div>
</div>`,
};

const colors = [
  "firebrick",
  "goldenrod",
  "rebeccapurple",
  "slateblue",
  "cadetblue",
];

window.NameTagMaker = class {
  #currentName = "";
  #currentColor = colors[1];

  bittyReady() {
    this.api.trigger("showNameTag");
  }

  nameTagColors(_ev, el) {
    colors.forEach((color) => {
      const subs = [
        ["COLOR", color],
      ];
      const newEl = this.api.makeElement(
        nameTagTemplates.colorBlock,
        subs,
      );
      if (color === this.#currentColor) {
        newEl.innerHTML = "x";
      }
      el.appendChild(newEl);
    });
  }

  updateNameTagName(ev, el) {
    this.#currentName = ev.val;
    this.api.trigger("showNameTag");
  }

  showNameTag(_ev, el) {
    const subs = [
      ["COLOR", this.#currentColor],
      ["NAME", this.#currentName],
    ];
    const newTag = this.api.makeHTML(nameTagTemplates.nameTag, subs);
    el.replaceChildren(newTag);
  }

  updateNameTagColor(ev, el) {
    if (el.isSender) {
      el.innerHTML = "x";
      this.#currentColor = el.ds("color");
    } else {
      el.innerHTML = "";
    }
    this.api.trigger("showNameTag");
  }
};

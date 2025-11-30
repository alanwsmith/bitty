const templates = {
  colorBlock: `<div 
class="name-tag-color name-tag-color-COLOR"
data-color="COLOR"
data-send="nameTagSwitchColor"
data-receive="nameTagSwitchColor"
></div>`,
  colorStyle: `.name-tag-color-COLOR {
  background-color: COLOR;
}`,
};

const colors = [
  "firebrick",
  "gold",
  "rebeccapurple",
  "slateblue",
  "cadetblue",
];

export default class {
  #currentName = "Unknown Name";
  #currentColor = "gold";

  bittyInit() {
    this.api.trigger("makeNameTagColorStyles");
  }

  makeNameTagColorStyles(_ev, _el) {
    const content = colors.map((color) => {
      const subs = [
        ["COLOR", color],
      ];
      return this.api.makeTXT(templates.colorStyle, subs);
    });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(content.join(""));
    document.adoptedStyleSheets.push(sheet);
  }

  nameTagColors(_ev, el) {
    colors.forEach((color) => {
      const subs = [
        ["COLOR", color],
      ];
      const newEl = this.api.makeElement(
        templates.colorBlock,
        subs,
      );
      console.log(this.#currentColor);
      console.log(color);
      if (color === this.#currentColor) {
        newEl.innerHTML = "x";
      }
      el.appendChild(newEl);
    });
  }

  nameTagName(ev, el) {
    this.#currentName = ev.val;
    console.log(this.#currentName);
  }

  nameTagSubmit(_ev, el) {
    el.innerHTML = "asdf";
  }

  nameTagSwitchColor(ev, el) {
    if (el.isSender) {
      el.innerHTML = "x";
      this.#currentColor = el.ds("color");
    } else {
      el.innerHTML = "";
    }
  }
}

const templates = {
  colorBlock: `<div class="name-tag-color name-tag-color-COLOR"></div>`,
  colorStyle: `
.name-tag-color-COLOR {
  background-color: COLOR;
}
`,
};

const colors = [
  "firebrick",
  "gold",
  "rebeccapurple",
  "slateblue",
  "cadetblue",
];

export default class {
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
      const newEl = this.api.makeHTML(
        templates.colorBlock,
        subs,
      );
      el.appendChild(newEl);
    });
  }
}

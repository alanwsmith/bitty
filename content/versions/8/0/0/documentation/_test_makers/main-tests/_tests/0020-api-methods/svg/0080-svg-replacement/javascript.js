window.$CLASS_NAME = class {
  #sourceSVG = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  TARGET_$HASH
</svg>`;

  #secondSVG = `<rect width="100%" height="100%" fill="blue" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ok</text>`;

  #updated;

  bittyReady() {
    const source = ``;
    this.api.addSVG("$ID_NAME", this.#sourceSVG)
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    const subs = {
      "TARGET_$HASH": this.#secondSVG,
    };
    this.#updated = this.api.svg("$ID_NAME", subs); 
    el.innerHTML = "xxx";
    this.api.trigger("display_$SIGNAL_NAME");
  }

  display_$SIGNAL_NAME(_, el) {
    el.replaceChildren(this.#updated);
  }
};

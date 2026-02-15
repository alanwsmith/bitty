window.Class8DE54 = class {
  #sourceSVG = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  TARGET_8DE54
</svg>`;

  #secondSVG = `<rect width="100%" height="100%" fill="blue" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ok</text>`;

  #updated;

  bittyReady() {
    const source = ``;
    this.api.addSVG("id-8DE54", this.#sourceSVG)
    this.api.trigger("signal_8DE54");
  }

  signal_8DE54(_, el) {
    const subs = {
      "TARGET_8DE54": this.#secondSVG,
    };
    this.#updated = this.api.svg("id-8DE54", subs); 
    el.innerHTML = "xxx";
    this.api.trigger("display_signal_8DE54");
  }

  display_signal_8DE54(_, el) {
    el.replaceChildren(this.#updated);
  }
};

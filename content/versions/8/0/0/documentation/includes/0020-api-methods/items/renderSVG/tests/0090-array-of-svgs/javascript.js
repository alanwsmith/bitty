window.Class48111 = class {
  #sourceSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
TARGET_48111
</svg>`;

  #secondSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="blue" />
</svg>`;

  #thirdSVG =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<text class="Class48111" x="150" y="125" font-size="60" text-anchor="middle" fill="goldenrod">ok</text>
</svg>`;

  #updated;

  bittyReady() {
    const source = ``;
    this.api.addSVG("id-48111", this.#sourceSVG)
    this.api.trigger("signal_48111");
  }

  signal_48111(_, el) {
    const subs = {
      "TARGET_48111": [this.#secondSVG, this.#thirdSVG]
    };
    this.#updated = this.api.svg("id-48111", subs); 
    el.innerHTML = this.#updated.querySelector(".Class48111").innerHTML;
    this.api.trigger("display_signal_48111");
  }

  display_signal_48111(_, el) {
    el.replaceChildren(this.#updated);
  }
};

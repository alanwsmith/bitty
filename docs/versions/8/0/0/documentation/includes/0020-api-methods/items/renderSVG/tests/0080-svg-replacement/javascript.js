window.ClassBED38 = class {
  #sourceSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
TARGET_BED38
</svg>`;

  #secondSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<text class="ClassBED38" x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ok</text>
</svg>`;

  #updated;

  bittyReady() {
    const source = ``;
    this.api.addSVG("id-BED38", this.#sourceSVG)
    this.api.trigger("signal_BED38");
  }

  signal_BED38(_, el) {
    const subs = {
      "TARGET_BED38": this.#secondSVG,
    };
    this.#updated = this.api.svg("id-BED38", subs); 
    el.innerHTML = this.#updated.querySelector(".ClassBED38").innerHTML;
    this.api.trigger("display_signal_BED38");
  }

  display_signal_BED38(_, el) {
    el.replaceChildren(this.#updated);
  }
};

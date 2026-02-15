window.Class45844 = class {
  #sourceSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="green" />
TARGET_45844
</svg>`;

  #secondSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="blue" />
</svg>`;

  #thirdSVG =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<text class="Class45844" x="150" y="125" font-size="60" text-anchor="middle" fill="goldenrod">ok</text>
</svg>`;

  #updated;

  bittyReady() {
    const source = ``;
    this.api.addSVG("id-45844", this.#sourceSVG)
    this.api.trigger("signal_45844");
  }

  signal_45844(_, el) {
    const subs = {
      "TARGET_45844": [this.#secondSVG, this.#thirdSVG]
    };
    this.#updated = this.api.svg("id-45844", subs); 
    el.innerHTML = this.#updated.querySelector(".Class45844").innerHTML;
    this.api.trigger("display_signal_45844");
  }

  display_signal_45844(_, el) {
    el.replaceChildren(this.#updated);
  }
};

window.ClassD4DA1 = class {
  #key = "svg_signal_D4DA1";

  test_signal_D4DA1(_, el) {
    this.loadSVG(this.#key);
    const svg = this.renderSVG(this.#key);
    el.innerHTML = svg.querySelector("text").innerHTML;
    this.send(svg, "view_signal_D4DA1");
  }

  view_signal_D4DA1(svg, el) {
    el.replaceWith(svg);
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    const input = `
<svg version="1.1" width="60" height="40" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="green" />
  <text x="30" y="24" font-size="20" text-anchor="middle" fill="white">ok</text>
</svg>`;
    this.setLogLevel("none");
    this.deleteSVG(this.#key);
    this.createSVG(this.#key, input);
    delete this._svg[this.#key];
    this.trigger("test_signal_D4DA1");
  }
};

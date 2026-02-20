window.ClassB2E8A = class {
  #key = "svg_signal_B2E8A";

  test_signal_B2E8A(_, el) {
    this.loadSVG(this.#key);
    const svg = this.renderSVG(this.#key);
    el.innerHTML = svg.querySelector("text").innerHTML;
    this.send(svg, "view_signal_B2E8A");
  }

  view_signal_B2E8A(svg, el) {
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
    this.removeSVG(this.#key);
    this.loadSVG(this.#key, input);
    delete this._svg[this.#key];
    this.trigger("test_signal_B2E8A");
  }
};

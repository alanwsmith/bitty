window.ClassCB6CF = class {
  #key = "svg_signal_CB6CF";

  test_signal_CB6CF(_, el) {
    this.deleteSVG(this.#key);
    if (this.renderSVG(this.#key) === undefined) {
      el.innerHTML = "ok";
    }
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
    this.createSVG(this.#key, input);
    this.trigger("test_signal_CB6CF");
  }
};

window.Class1D251 = class {
  #key = "svg_signal_1D251";

  test_signal_1D251(_, el) {
    this.deleteSVG(this.#key);
    const result = this.loadSVG(this.#key);
    if (result.level === "error" && result.ok === false) {
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
    this.trigger("test_signal_1D251");
  }
};

window.Class34AC4 = class {
  #key = "svg_signal_34AC4";

  test_signal_34AC4(input, el) {
    const result = this.createSVG(this.#key, input);
    if (result.ok === true && result.level === "warn") {
      //      el.innerHTML = "ok";
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
    this.send(input, "test_signal_34AC4");
  }
};

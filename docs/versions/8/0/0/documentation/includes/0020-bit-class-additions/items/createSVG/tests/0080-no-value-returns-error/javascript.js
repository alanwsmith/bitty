window.ClassB7C32 = class {
  #key = "svg_signal_B7C32";

  test_signal_B7C32(_, el) {
    const result = this.createSVG(this.#key);
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.trigger("test_signal_B7C32");
  }
};

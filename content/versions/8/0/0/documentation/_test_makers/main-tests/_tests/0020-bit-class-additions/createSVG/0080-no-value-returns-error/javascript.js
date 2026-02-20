window.$CLASS_NAME = class {
  #key = "svg_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
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
    this.trigger("test_$SIGNAL_NAME");
  }
};

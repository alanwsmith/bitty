window.$CLASS_NAME = class {
  #key = "svg_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const result = this.loadSVG(this.#key);
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.removeSVG(this.#key);
    this.trigger("test_$SIGNAL_NAME");
  }
};

window.$CLASS_NAME = class {
  #key = "svg_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const fragment = this.renderSVG(this.#key);
    if (fragment === undefined) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.removeSVG(this.#key);
    this.trigger("test_$SIGNAL_NAME");
  }
};

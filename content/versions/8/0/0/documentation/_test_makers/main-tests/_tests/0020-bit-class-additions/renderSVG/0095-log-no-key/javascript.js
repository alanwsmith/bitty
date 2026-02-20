window.$CLASS_NAME = class {
  #key = "svg_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    this.logs = [];
    this.renderSVG(this.#key);
    if (this.logs[0].ok === false && this.logs[0].level === "error") {
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

window.Class609BD = class {
  #key = "svg_signal_609BD";

  test_signal_609BD(_, el) {
    const result = this.loadSVG(this.#key, {
      misc: "objects are not valid fallbacks",
    });
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.trigger("test_signal_609BD");
  }
};

window.Class00957 = class {
  #key = "svg_signal_00957";

  test_signal_00957(input, el) {
    const result = this.createSVG(this.#key, {
      key: "not a string or svg",
    });
    if (result.ok === false && result.level === "error") {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.trigger("test_signal_00957");
  }
};

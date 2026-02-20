window.ClassB555B = class {
  #key = "svg_signal_B555B";

  test_signal_B555B(input, el) {
    const result = this.createSVG(this.#key, {
      key: "not a string or svg",
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
    this.trigger("test_signal_B555B");
  }
};

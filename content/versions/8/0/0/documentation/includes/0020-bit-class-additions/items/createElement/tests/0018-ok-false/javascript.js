window.Class2C3F3 = class {
  #key = "el_signal_2C3F3";

  test_signal_2C3F3(_, el) {
    const result = this.createElement(this.#key, {
      misc: "not a string, element, or document fragment",
    });
    console.log(result);
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_2C3F3");
  }

  given_signal_2C3F3(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_2C3F3");
  }
};

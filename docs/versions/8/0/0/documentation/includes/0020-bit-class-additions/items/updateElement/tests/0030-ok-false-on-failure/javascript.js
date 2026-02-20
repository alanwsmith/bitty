window.ClassBDBD6 = class {
  #key = "fragment_signal_BDBD6";

  test_signal_BDBD6(_, el) {
    const result = this.updateFragment(this.#key, {
      key: "not a string, element, or document fragment",
    });
    if (result.ok === false && result.level === "error") {
      //el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_BDBD6");
  }

  given_signal_BDBD6(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_BDBD6");
  }
};

window.ClassB555B = class {
  #key = "fragment_signal_B555B";

  test_signal_B555B(_, el) {
    const result = this.createFragment(this.#key, {
      key: "not a string, element, or document fragment",
    });
    if (result.ok === false && result.level === "error") {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_B555B");
  }

  given_signal_B555B(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_B555B");
  }
};

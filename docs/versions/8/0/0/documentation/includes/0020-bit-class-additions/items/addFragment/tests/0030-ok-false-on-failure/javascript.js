window.Class129C2 = class {
  #key = "fragment_signal_129C2";

  test_signal_129C2(_, el) {
    const result = this.addFragment(this.#key, {
      key: "not a string, element, or document fragment",
    });
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_129C2");
  }

  given_signal_129C2(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_129C2");
  }
};

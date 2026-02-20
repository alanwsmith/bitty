window.ClassC8DB8 = class {
  #key = "fragment_signal_C8DB8";

  test_signal_C8DB8(_, el) {
    const result = this.createFragment(this.#key, {
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
    this.trigger("given_signal_C8DB8");
  }

  given_signal_C8DB8(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_C8DB8");
  }
};

window.ClassB7C32 = class {
  #key = "fragment_signal_B7C32";

  test_signal_B7C32(_, el) {
    const result = this.createFragment(this.#key);
    if (result.ok === false && result.level === "error") {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_B7C32");
  }

  given_signal_B7C32(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_B7C32");
  }
};

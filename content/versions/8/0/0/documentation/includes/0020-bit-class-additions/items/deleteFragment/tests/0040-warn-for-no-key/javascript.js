window.ClassB0E93 = class {
  #key = "fragment_signal_B0E93";

  test_signal_B0E93(_, el) {
    const result = this.removeFragment(this.#key);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_B0E93");
  }

  given_signal_B0E93(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    this.trigger("test_signal_B0E93");
  }
};

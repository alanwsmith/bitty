window.Class99F17 = class {
  #key = "fragment_signal_99F17";

  test_signal_99F17(fallbackFragment, el) {
    const result = this.loadFragment(this.#key, fallbackFragment);
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_99F17");
  }

  given_signal_99F17(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_99F17");
  }
};

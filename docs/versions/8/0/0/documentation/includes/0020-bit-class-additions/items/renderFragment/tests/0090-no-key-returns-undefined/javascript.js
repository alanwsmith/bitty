window.ClassAD946 = class {
  #key = "fragment_signal_AD946";

  test_signal_AD946(_, el) {
    const fragment = this.renderFragment(this.#key);
    if (fragment === undefined) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_AD946");
  }

  given_signal_AD946(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    this.trigger("test_signal_AD946");
  }
};

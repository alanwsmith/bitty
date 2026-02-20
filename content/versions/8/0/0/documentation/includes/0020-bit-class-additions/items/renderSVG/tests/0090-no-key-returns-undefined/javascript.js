window.Class01959 = class {
  #key = "fragment_signal_01959";

  test_signal_01959(_, el) {
    const fragment = this.renderFragment(this.#key);
    if (fragment === undefined) {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_01959");
  }

  given_signal_01959(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    this.trigger("test_signal_01959");
  }
};

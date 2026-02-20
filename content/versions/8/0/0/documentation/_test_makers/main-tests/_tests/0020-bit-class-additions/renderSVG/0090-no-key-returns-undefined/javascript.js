window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const fragment = this.renderFragment(this.#key);
    if (fragment === undefined) {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    this.trigger("test_$SIGNAL_NAME");
  }
};

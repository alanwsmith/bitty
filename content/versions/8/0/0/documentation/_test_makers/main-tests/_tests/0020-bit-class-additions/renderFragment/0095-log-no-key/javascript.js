window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    this.logs = [];
    this.renderFragment(this.#key);
    if (this.logs[0].ok === false && this.logs[0].level === "error") {
      el.innerHTML = "ok";
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
    this.deleteFragment(this.#key);
    this.trigger("test_$SIGNAL_NAME");
  }
};

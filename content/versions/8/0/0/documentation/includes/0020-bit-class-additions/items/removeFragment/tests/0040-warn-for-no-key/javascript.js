window.ClassCFBFE = class {
  #key = "fragment_signal_CFBFE";

  test_signal_CFBFE(_, el) {
    const result = this.removeFragment(this.#key);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Preflight
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_CFBFE");
  }

  given_signal_CFBFE(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    this.trigger("test_signal_CFBFE");
  }
};

window.ClassBED08 = class {
  #key = "fragment_signal_BED08";

  test_signal_BED08(_, el) {
    this.removeFragment(this.#key);
    const result = this.loadFragment(this.#key);
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Preflight
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_BED08");
  }

  given_signal_BED08(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, "<div></div>");
    this.trigger("test_signal_BED08");
  }
};

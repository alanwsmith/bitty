window.ClassE279E = class {
  #key = "fragment_signal_E279E";

  test_signal_E279E(_, el) {
    this.deleteFragment(this.#key);
    const result = this.loadFragment(this.#key);
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_E279E");
  }

  given_signal_E279E(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, "<div></div>");
    this.trigger("test_signal_E279E");
  }
};

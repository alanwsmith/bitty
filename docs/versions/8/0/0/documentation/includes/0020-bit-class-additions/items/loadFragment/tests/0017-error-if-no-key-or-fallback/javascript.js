window.Class7EF03 = class {
  #key = "fragment_signal_7EF03";

  test_signal_7EF03(_, el) {
    const result = this.loadFragment(this.#key);
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_7EF03");
  }

  given_signal_7EF03(_, __) {
    this.setLogLevel("none");
    this.deleteFragment(this.#key);
    this.trigger("test_signal_7EF03");
  }
};

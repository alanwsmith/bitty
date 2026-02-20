window.ClassFACB7 = class {
  #key = "fragment_signal_FACB7";

  test_signal_FACB7(_, el) {
    const result = this.createFragment(this.#key, `<div></div>`);
    if (result.ok === true && result.level === "warn") {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_FACB7");
  }

  given_signal_FACB7(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, `<div></div>`);
    this.trigger("test_signal_FACB7");
  }
};

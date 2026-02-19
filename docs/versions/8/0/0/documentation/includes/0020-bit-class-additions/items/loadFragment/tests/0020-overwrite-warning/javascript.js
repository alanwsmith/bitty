window.ClassF8382 = class {
  #key = "fragment_signal_F8382";

  test_signal_F8382(_, el) {
    const result = this.loadFragment(this.#key);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_F8382");
  }

  given_signal_F8382(_, __) {
    this.setLogLevel("none");
    this.addFragment(this.#key, `<div></div>`);
    this.trigger("test_signal_F8382");
  }
};

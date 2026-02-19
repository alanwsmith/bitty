window.Class24C1A = class {
  #key = "fragment_signal_24C1A";

  test_signal_24C1A(_, el) {
    const result = this.removeFragment(this.#key);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Preflight
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_24C1A");
  }

  given_signal_24C1A(_, __) {
    this.setLogLevel("none");
    this.addFragment(this.#key, "<div></div>");
    this.trigger("test_signal_24C1A");
  }
};

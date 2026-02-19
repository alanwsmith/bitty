window.Class2F03D = class {
  #key = "fragment_signal_2F03D";

  test_signal_2F03D(_, el) {
    const result = this.createFragment(this.#key);
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_2F03D");
  }

  given_signal_2F03D(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_2F03D");
  }
};

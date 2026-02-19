window.Class6EF24 = class {
  #key = "fragment_signal_6EF24";

  test_signal_6EF24(_, el) {
    const result = this.addFragment(this.#key);
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_6EF24");
  }

  given_signal_6EF24(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_6EF24");
  }
};

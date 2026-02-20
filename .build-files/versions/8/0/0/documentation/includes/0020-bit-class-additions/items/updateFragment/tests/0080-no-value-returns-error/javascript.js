window.Class00B0F = class {
  #key = "fragment_signal_00B0F";

  test_signal_00B0F(_, el) {
    const result = this.updateFragment(this.#key);
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_00B0F");
  }

  given_signal_00B0F(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_00B0F");
  }
};

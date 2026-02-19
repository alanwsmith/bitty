window.ClassFE03B = class {
  #key = "fragment_signal_FE03B";

  test_signal_FE03B(_, el) {
    const result = this.createFragment();
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_FE03B");
  }

  given_signal_FE03B(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_FE03B");
  }
};

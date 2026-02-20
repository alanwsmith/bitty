window.ClassE0312 = class {
  #key = "fragment_signal_E0312";

  test_signal_E0312(_, el) {
    const result = this.updateFragment();
    if (result.ok === false && result.level === "error") {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_E0312");
  }

  given_signal_E0312(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_E0312");
  }
};

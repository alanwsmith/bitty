window.Class226E6 = class {
  #key = "fragment_signal_226E6";

  test_signal_226E6(_, el) {
    const result = this.createFragment();
    if (result.ok === false && result.level === "error") {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_226E6");
  }

  given_signal_226E6(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_226E6");
  }
};

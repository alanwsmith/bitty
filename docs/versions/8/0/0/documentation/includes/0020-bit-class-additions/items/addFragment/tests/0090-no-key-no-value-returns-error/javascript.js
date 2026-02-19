window.Class41274 = class {
  #key = "fragment_signal_41274";

  test_signal_41274(_, el) {
    const result = this.addFragment();
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_41274");
  }

  given_signal_41274(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_41274");
  }
};

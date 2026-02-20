window.ClassC95B6 = class {
  #key = "fragment_signal_C95B6";

  test_signal_C95B6(_, el) {
    const result = this.updateFragment(this.#key);
    if (result.ok === false && result.level === "error") {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_C95B6");
  }

  given_signal_C95B6(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_C95B6");
  }
};

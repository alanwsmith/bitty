window.ClassC244B = class {
  #key = "fragment_signal_C244B";

  test_signal_C244B(_, el) {
    const result = this.addElement(this.#key, { misc: "not a valid input" });
    if (result.ok === false && result.level === "error") {
      //el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_C244B");
  }

  given_signal_C244B(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_C244B");
  }
};

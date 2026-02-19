window.Class24466 = class {
  #key = "fragment_signal_24466";

  test_signal_24466(_, el) {
    const result = this.addElement(this.#key, { misc: "not a valid input" });
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_24466");
  }

  given_signal_24466(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_24466");
  }
};

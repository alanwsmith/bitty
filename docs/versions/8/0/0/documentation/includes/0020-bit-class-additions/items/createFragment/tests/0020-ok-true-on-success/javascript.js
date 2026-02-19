window.ClassD2EBD = class {
  #key = "fragment_signal_D2EBD";

  test_signal_D2EBD(_, el) {
    const result = this.createFragment(this.#key, `<div>x</div><div>ok</div>`);
    if (result.ok === true && result.level === "info") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_D2EBD");
  }

  given_signal_D2EBD(_, __) {
    this.trigger("test_signal_D2EBD");
  }
};

window.ClassD4BFF = class {
  #key = "fragment_signal_D4BFF";

  test_signal_D4BFF(_, el) {
    const result = this.updateFragment(this.#key, `<div>x</div><div>ok</div>`);
    if (result.ok === true && result.level === "info") {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_D4BFF");
  }

  given_signal_D4BFF(_, __) {
    this.trigger("test_signal_D4BFF");
  }
};

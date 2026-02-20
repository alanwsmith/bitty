window.Class846F3 = class {
  #key = "fragment_signal_846F3";

  test_signal_846F3(_, el) {
    const result = this.updateFragment(this.#key, `<div></div>`);
    if (result.ok === true && result.level === "info") {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_846F3");
  }

  given_signal_846F3(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, `<div></div>`);
    this.trigger("test_signal_846F3");
  }
};

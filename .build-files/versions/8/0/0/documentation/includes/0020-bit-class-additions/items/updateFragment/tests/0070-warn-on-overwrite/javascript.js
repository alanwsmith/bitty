window.ClassCA48A = class {
  #key = "fragment_signal_CA48A";

  test_signal_CA48A(_, el) {
    const result = this.updateFragment(this.#key, `<div></div>`);
    if (result.ok === true && result.level === "info") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_CA48A");
  }

  given_signal_CA48A(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, `<div></div>`);
    this.trigger("test_signal_CA48A");
  }
};

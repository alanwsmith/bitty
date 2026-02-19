window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const result = this.loadFragment(this.#key);
    if (result.ok === true && result.level === "info") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    this.addFragment(this.#key, `<div>ok</div>`);
    delete this._fragment[this.#key];
    this.trigger("test_$SIGNAL_NAME");
  }
};

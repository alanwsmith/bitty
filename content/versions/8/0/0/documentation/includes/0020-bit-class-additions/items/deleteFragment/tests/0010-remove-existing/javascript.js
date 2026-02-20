window.Class108CD = class {
  #key = "fragment_signal_108CD";

  test_signal_108CD(_, el) {
    this.deleteFragment(this.#key);
    if (this._fragment[this.#key] === undefined) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_108CD");
  }

  given_signal_108CD(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, "<div></div>");
    this.trigger("test_signal_108CD");
  }
};

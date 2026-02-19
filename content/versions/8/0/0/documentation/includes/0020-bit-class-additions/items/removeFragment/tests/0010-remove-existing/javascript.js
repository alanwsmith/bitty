window.Class70825 = class {
  #key = "fragment_signal_70825";

  test_signal_70825(_, el) {
    this.removeFragment(this.#key);
    if (this.fragment[this.#key] === undefined) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Preflight
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_70825");
  }

  given_signal_70825(_, __) {
    this.setLogLevel("none");
    this.addFragment(this.#key, "<div></div>");
    this.trigger("test_signal_70825");
  }
};

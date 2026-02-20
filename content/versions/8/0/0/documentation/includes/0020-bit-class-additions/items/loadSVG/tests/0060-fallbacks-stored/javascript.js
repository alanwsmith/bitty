window.ClassB2E8A = class {
  #key = "fragment_signal_B2E8A";

  test_signal_B2E8A(fallbackFragment, el) {
    this.loadFragment(this.#key);
    //el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_B2E8A");
  }

  given_signal_B2E8A(_, __) {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    this.loadFragment(this.#key, "<div>ok</div>");
    delete this.fragment[this.#key];
    this.trigger("test_signal_B2E8A");
  }
};

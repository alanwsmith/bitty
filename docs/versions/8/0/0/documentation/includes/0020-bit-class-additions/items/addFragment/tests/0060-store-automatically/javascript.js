window.Class46488 = class {
  #key = "fragment_signal_46488";

  test_signal_46488(element, el) {
    const result = this.loadFragment(this.#key);
    el.innerHTML = this.fragment[this.#key].firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_46488");
  }

  given_signal_46488(_, __) {
    this.removeFragment(this.#key);
    this.addFragment(this.#key, `<div>ok</div>`);
    delete this.fragment[this.#key];
    this.trigger("test_signal_46488");
  }
};

window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    this.loadFragment(this.#key);
    el.innerHTML = this.fragment[this.#key].firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.removeFragment(this.#key);
    this.addFragment(this.#key, `<div>ok</div>`);
    delete this.element[this.#key];
    this.trigger("test_$SIGNAL_NAME");
  }
};

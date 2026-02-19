window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  test_$SIGNAL_NAME(element, el) {
    const result = this.loadFragment(this.#key);
    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.removeFragment(this.#key);
    this.updateFragment(this.#key, `<div>ok</div>`);
    delete this._fragment[this.#key];
    this.trigger("test_$SIGNAL_NAME");
  }
};

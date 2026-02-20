window.Class6291C = class {
  #key = "fragment_signal_6291C";

  test_signal_6291C(element, el) {
    const result = this.loadFragment(this.#key);
    //    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_6291C");
  }

  given_signal_6291C(_, __) {
    this.removeFragment(this.#key);
    this.updateFragment(this.#key, `<div>ok</div>`);
    delete this._fragment[this.#key];
    this.trigger("test_signal_6291C");
  }
};

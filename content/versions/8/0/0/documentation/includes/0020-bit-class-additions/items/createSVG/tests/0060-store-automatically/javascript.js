window.ClassD4DA1 = class {
  #key = "fragment_signal_D4DA1";

  test_signal_D4DA1(element, el) {
    const result = this.loadFragment(this.#key);
    //    el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_D4DA1");
  }

  given_signal_D4DA1(_, __) {
    this.removeFragment(this.#key);
    this.createFragment(this.#key, `<div>ok</div>`);
    delete this._fragment[this.#key];
    this.trigger("test_signal_D4DA1");
  }
};

window.Class6291C = class {
  #key = "element_signal_6291C";

  test_signal_6291C(element, el) {
    this.loadElement(this.#key);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.removeFragment(this.#key);
    this.createElement(this.#key, `<div class="test">bug</div>`);
    this.updateElement(this.#key, `<div class="test">ok</div>`);
    delete this._element[this.#key];
    this.trigger("test_signal_6291C");
  }
};

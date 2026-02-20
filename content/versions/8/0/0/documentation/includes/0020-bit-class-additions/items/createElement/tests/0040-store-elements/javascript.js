window.Class6CF16 = class {
  #key = "el_signal_6CF16";

  test_signal_6CF16(_, el) {
    this.createElement(this.#key, `<div class="test">ok</div>`);
    delete this._element[this.#key];
    this.loadElement(this.#key);
    console.log(this._element[this.#key]);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.trigger("test_signal_6CF16");
  }
};

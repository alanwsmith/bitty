window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
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
    this.trigger("test_$SIGNAL_NAME");
  }
};

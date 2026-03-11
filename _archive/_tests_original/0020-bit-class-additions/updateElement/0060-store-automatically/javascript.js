window.$CLASS_NAME = class {
  #key = "element_$SIGNAL_NAME";

  test_$SIGNAL_NAME(element, el) {
    this.loadElement(this.#key);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.deleteFragment(this.#key);
    this.createElement(this.#key, `<div class="test">bug</div>`);
    this.updateElement(this.#key, `<div class="test">ok</div>`);
    delete this._element[this.#key];
    this.trigger("test_$SIGNAL_NAME");
  }
};

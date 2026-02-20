window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    this.loadElement(this.#key, `<div class="test">ok</div>`);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.deleteElement(this.#key);
    this.trigger("test_$SIGNAL_NAME");
  }
};

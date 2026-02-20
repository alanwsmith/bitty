window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    this.updateElement(this.#key, `<div class="test">ok</div>`);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.createElement(this.#key, `<div class="test">bug</div>`);
    this.trigger("test_$SIGNAL_NAME");
  }
};

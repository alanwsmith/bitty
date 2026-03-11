window.$CLASS_NAME = class {
  #key = "key_$SIGNAL_NAME";

  test_$SIGNAL_NAME(update, el) {
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_$SIGNAL_NAME");
  }
};

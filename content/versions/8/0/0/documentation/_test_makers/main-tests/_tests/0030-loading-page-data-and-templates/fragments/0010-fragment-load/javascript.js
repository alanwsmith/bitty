window.$CLASS_NAME = class {
  #key = "key_$SIGNAL_NAME";

  test_$SIGNAL_NAME(update, el) {
    el.replaceWith(this.renderFragment(this.#key).children[1]);
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_$SIGNAL_NAME");
  }
};

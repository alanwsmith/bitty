window.Class72723 = class {
  #key = "key_signal_72723";

  test_signal_72723(update, el) {
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_72723");
  }
};

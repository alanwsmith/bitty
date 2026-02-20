window.Class3EB4D = class {
  #key = "el_signal_3EB4D";

  test_signal_3EB4D(_, el) {
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.createElement(this.#key, `<div class="test">ok</div>`);
    this.trigger("test_signal_3EB4D");
  }
};

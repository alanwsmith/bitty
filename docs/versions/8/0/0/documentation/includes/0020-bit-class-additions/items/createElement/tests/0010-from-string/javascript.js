window.Class2B6BB = class {
  #key = "el_signal_2B6BB";

  test_signal_2B6BB(_, el) {
    const elementString = `<div class="test">ok</div>`;
    this.createElement(this.#key, elementString);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_2B6BB");
  }
};

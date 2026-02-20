window.Class2B6BB = class {
  #key = "el_signal_2B6BB";

  test_signal_2B6BB(_, el) {
    const elementString = `<div>ok</div>`;
    this.createElement(this.#key, elementString);
    el.innerHTML = this.renderElement(this.#key).innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_2B6BB");
  }

  given_signal_2B6BB(_, __) {
    this.trigger("test_signal_2B6BB");
  }
};

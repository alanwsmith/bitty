window.Class9D350 = class {
  #key = "el_signal_9D350";

  test_signal_9D350(_, el) {
    this.loadElement(this.#key, `<div class="test">ok</div>`);
    delete this.element[this.#key];
    this.loadElement(this.#key);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.deleteElement(this.#key);
    this.trigger("test_signal_9D350");
  }
};

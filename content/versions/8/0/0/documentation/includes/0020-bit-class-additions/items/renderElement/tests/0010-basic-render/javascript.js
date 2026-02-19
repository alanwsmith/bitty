window.Class3EB4D = class {
  #key = "el_signal_3EB4D";

  bittyReady() {
    this.trigger("given_signal_3EB4D");
  }

  given_signal_3EB4D(_, __) {
    this.addElement(this.#key, `<div class="test">ok</div>`);
    this.trigger("test_signal_3EB4D");
  }

  test_signal_3EB4D(_, el) {
    el.replaceWith(
      this.renderElement(this.#key),
    );
  }
};

#key = "el_signal_3EB4D";

test_signal_3EB4D(_, el) {
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.createElement(this.#key, `<div class="test">ok</div>`);
  this.trigger("test_signal_3EB4D");
}
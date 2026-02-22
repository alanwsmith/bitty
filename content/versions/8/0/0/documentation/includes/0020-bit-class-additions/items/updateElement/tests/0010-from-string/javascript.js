#key = "element_signal_B814D";

test_signal_B814D(_, el) {
  this.updateElement(this.#key, `<div class="test">ok</div>`);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLogLevel("none");
  this.createElement(this.#key, `<div class="test">bug</div>`);
  this.trigger("test_signal_B814D");
}
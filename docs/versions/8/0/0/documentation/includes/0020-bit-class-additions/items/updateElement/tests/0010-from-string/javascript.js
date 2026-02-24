#key = "element_signal_B814D";

signal_B814D(_, el) {
  this.updateElement(this.#key, `<div class="test">ok</div>`);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div class="test">bug</div>`);
  this.trigger("signal_B814D");
}
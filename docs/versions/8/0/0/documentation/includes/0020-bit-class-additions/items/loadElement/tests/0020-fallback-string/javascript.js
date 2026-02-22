#key = "el_signal_B86EE";

test_signal_B86EE(_, el) {
  this.loadElement(this.#key, `<div class="test">ok</div>`);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLogLevel("none");
  this.deleteElement(this.#key);
  this.trigger("test_signal_B86EE");
}
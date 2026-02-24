#key = "el_signal_B86EE";

signal_B86EE(_, el) {
  this.loadElement(this.#key, `<div class="test">ok</div>`);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement(this.#key);
  this.trigger("signal_B86EE");
}
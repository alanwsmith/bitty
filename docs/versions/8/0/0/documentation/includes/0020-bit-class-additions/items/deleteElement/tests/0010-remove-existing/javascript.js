#key = "el_signal_E84D4";

signal_E84D4(_, el) {
  this.deleteElement(this.#key);
  if (this.renderElement(this.#key) === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement(this.#key, `<div>ok</div>`);
  this.trigger("signal_E84D4");
}
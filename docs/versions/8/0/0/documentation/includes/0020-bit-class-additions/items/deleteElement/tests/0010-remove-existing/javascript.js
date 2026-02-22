#key = "el_signal_E84D4";

test_signal_E84D4(_, el) {
  this.deleteElement(this.#key);
  if (this.renderElement(this.#key) === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.createElement(this.#key, `<div>ok</div>`);
  this.trigger("test_signal_E84D4");
}
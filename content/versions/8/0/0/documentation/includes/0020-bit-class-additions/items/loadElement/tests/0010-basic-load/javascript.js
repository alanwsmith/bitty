#key = "el_signal_23191";

test_signal_23191(_, el) {
  this.loadElement(this.#key);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.setLogLevel("none");
  this.deleteElement(this.#key);
  this.createElement(this.#key, `<div class="test">ok</div>`);
  delete this._element[this.#key];
  this.trigger("test_signal_23191");
}
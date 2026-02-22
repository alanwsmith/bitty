#key = "el_signal_92749";

async test_signal_92749(_, el) {
  this.loadElement(this.#key);
  el.replaceWith(this.renderElement(this.#key));
}


async bittyReady() {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  await this.fetchElement(this.#key, url);
  delete this._element[this.#key];
  this.trigger("test_signal_92749");
}
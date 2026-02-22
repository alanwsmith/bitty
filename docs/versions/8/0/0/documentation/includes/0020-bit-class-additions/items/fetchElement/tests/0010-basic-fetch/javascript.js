#key = "el_signal_49058";

async test_signal_49058(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  await this.fetchElement(this.#key, url);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.trigger("test_signal_49058");
}
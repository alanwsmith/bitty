#key = "el_$SIGNAL_NAME";

async test_$SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  await this.fetchElement(this.#key, url);
  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}
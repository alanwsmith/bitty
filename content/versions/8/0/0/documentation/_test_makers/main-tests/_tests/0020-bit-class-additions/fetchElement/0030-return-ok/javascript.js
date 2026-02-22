#key = "el_$SIGNAL_NAME";

async test_$SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  const result = await this.fetchElement(this.#key, url);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}
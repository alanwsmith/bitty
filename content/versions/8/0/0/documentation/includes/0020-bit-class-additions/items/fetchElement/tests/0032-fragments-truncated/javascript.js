#key = "el_signal_E0510";

async test_signal_E0510(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  const result = await this.fetchElement(this.#key, url);
  if (
    result.level === "warn"
  ) {
    el.replaceWith(this.renderElement(this.#key));
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.trigger("test_signal_E0510");
}
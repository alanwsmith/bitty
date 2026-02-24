#key = "el_signal_0938C";

async signal_0938C(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-element.xml";
  const result = await this.fetchElement(this.#key, url);
  if (result.ok === true) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("signal_0938C");
}
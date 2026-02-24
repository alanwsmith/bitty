

async signal_BE8EB(url, el) {
  const result = await this.fetchFragment(this.#key, url);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_BE8EB");
}

given_signal_BE8EB(_, __) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  this.send(url, "signal_BE8EB");
}
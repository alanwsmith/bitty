#key = "fragment_signal_F9E7D";

async test_signal_F9E7D(url, el) {
  const result = await this.fetchFragment(this.#key, url);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_F9E7D");
}

given_signal_F9E7D(_, __) {
  this.setLogLevel("none");
  this.createFragment(this.#key, "<div></div>");
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  this.send(url, "test_signal_F9E7D");
}
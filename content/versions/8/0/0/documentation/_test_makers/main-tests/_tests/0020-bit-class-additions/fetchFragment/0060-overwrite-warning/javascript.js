#key = "fragment_$SIGNAL_NAME";

async test_$SIGNAL_NAME(url, el) {
  const result = await this.fetchFragment(this.#key, url);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLogLevel("none");
  this.createFragment(this.#key, "<div></div>");
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  this.send(url, "test_$SIGNAL_NAME");
}
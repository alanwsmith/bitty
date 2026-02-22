#key = "fragment_$SIGNAL_NAME";

async test_$SIGNAL_NAME(url, el) {
  await this.fetchFragment(this.#key, url);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  this.send(url, "test_$SIGNAL_NAME");
}
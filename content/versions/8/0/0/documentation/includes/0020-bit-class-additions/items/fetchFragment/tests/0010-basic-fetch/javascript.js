

async signal_E47B8(url, el) {
  await this.fetchFragment(this.#key, url);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_E47B8");
}

given_signal_E47B8(_, __) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  this.send(url, "signal_E47B8");
}
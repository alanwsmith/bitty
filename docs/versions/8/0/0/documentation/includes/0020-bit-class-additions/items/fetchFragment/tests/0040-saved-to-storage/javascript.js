#key = "fragment_signal_0CCFB";

signal_0CCFB(_, el) {
  this.loadFragment(this.#key);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_0CCFB");
}

async given_signal_0CCFB(_, __) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  await this.fetchFragment(this.#key, url);
  delete this._fragment[this.#key];
  this.trigger("signal_0CCFB");
}
#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  this.loadFragment(this.#key);
  el.innerHTML = this.renderFragment(this.#key).children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

async given_$SIGNAL_NAME(_, __) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  await this.fetchFragment(this.#key, url);
  delete this._fragment[this.#key];
  this.trigger("test_$SIGNAL_NAME");
}
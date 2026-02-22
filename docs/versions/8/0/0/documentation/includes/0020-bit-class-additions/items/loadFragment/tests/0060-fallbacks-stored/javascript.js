#key = "fragment_signal_D027C";

test_signal_D027C(fallbackFragment, el) {
  this.loadFragment(this.#key);
  el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_signal_D027C");
}

given_signal_D027C(_, __) {
  this.setLogLevel("none");
  this.deleteFragment(this.#key);
  this.loadFragment(this.#key, "<div>ok</div>");
  delete this._fragment[this.#key];
  this.trigger("test_signal_D027C");
}
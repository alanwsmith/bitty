#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(fallbackFragment, el) {
  this.loadFragment(this.#key);
  el.innerHTML = this.renderFragment(this.#key).firstChild.innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment(this.#key);
  this.loadFragment(this.#key, "<div>ok</div>");
  delete this._fragment[this.#key];
  this.trigger("test_$SIGNAL_NAME");
}
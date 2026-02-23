#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  this.deleteFragment(this.#key);
  if (this._fragment[this.#key] === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, "<div></div>");
  this.trigger("test_$SIGNAL_NAME");
}
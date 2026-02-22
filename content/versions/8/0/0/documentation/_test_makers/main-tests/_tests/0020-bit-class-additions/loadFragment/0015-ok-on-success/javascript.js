#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.loadFragment(this.#key);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLogLevel("none");
  this.deleteFragment(this.#key);
  this.createFragment(this.#key, `<div>ok</div>`);
  delete this._fragment[this.#key];
  this.trigger("test_$SIGNAL_NAME");
}
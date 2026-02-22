#key = "fragment_signal_697D1";

test_signal_697D1(_, el) {
  const result = this.loadFragment(this.#key);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_697D1");
}

given_signal_697D1(_, __) {
  this.setLogLevel("none");
  this.deleteFragment(this.#key);
  this.createFragment(this.#key, `<div>ok</div>`);
  delete this._fragment[this.#key];
  this.trigger("test_signal_697D1");
}
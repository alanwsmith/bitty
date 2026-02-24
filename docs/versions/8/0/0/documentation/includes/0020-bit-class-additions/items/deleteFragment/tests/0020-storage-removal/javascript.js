

signal_E279E(_, el) {
  this.deleteFragment(this.#key);
  const result = this.loadFragment(this.#key);
  if (result.ok === false) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_E279E");
}

given_signal_E279E(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, "<div></div>");
  this.trigger("signal_E279E");
}
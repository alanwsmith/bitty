#key = "fragment_signal_7EF03";

signal_7EF03(_, el) {
  const result = this.loadFragment(this.#key);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_7EF03");
}

given_signal_7EF03(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment(this.#key);
  this.trigger("signal_7EF03");
}
#key = "fragment_signal_B0E93";

test_signal_B0E93(_, el) {
  const result = this.deleteFragment(this.#key);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_B0E93");
}

given_signal_B0E93(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment(this.#key);
  this.trigger("test_signal_B0E93");
}
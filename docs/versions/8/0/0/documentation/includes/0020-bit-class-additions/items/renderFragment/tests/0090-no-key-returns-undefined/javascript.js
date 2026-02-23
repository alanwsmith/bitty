#key = "fragment_signal_AD946";

test_signal_AD946(_, el) {
  const fragment = this.renderFragment(this.#key);
  if (fragment === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_AD946");
}

given_signal_AD946(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment(this.#key);
  this.trigger("test_signal_AD946");
}

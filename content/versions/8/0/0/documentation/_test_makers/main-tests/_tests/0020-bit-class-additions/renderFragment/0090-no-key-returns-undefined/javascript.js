#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const fragment = this.renderFragment(this.#key);
  if (fragment === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLogLevel("none");
  this.deleteFragment(this.#key);
  this.trigger("test_$SIGNAL_NAME");
}
#key = "fragment_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const fragment = this.renderFragment(this.#key);
  if (fragment === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.deleteFragment(this.#key);
  this.trigger("$SIGNAL_NAME");
}

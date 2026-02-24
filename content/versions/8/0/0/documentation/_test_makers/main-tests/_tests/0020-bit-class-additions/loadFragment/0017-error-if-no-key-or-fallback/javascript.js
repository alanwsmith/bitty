#key = "fragment_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.loadFragment(this.#key);
  if (result.ok === false && result.level === "error") {
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
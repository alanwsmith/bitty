#key = "fragment_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.deleteFragment(this.#key);
  if (result.ok === true && result.level === "warn") {
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
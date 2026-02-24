#key = "fragment_signal_99F17";

signal_99F17(_, el) {
  const result = this.loadFragment(this.#key, {
    misc: "objects are not valid fallbacks",
  });
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_99F17");
}

given_signal_99F17(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("signal_99F17");
}
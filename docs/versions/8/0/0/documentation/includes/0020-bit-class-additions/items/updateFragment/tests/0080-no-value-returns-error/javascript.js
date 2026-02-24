#key = "fragment_signal_00B0F";

signal_00B0F(_, el) {
  const result = this.updateFragment(this.#key);
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_00B0F");
}

given_signal_00B0F(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("signal_00B0F");
}
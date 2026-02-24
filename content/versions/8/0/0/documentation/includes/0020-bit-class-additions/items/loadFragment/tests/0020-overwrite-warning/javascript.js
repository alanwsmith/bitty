#key = "fragment_signal_F8382";

signal_F8382(_, el) {
  const result = this.loadFragment(this.#key);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_F8382");
}

given_signal_F8382(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, `<div></div>`);
  this.trigger("signal_F8382");
}
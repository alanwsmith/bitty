#key = "fragment_signal_3D5CF";

test_signal_3D5CF(_, el) {
  const result = this.createFragment(this.#key, `<div></div>`);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_3D5CF");
}

given_signal_3D5CF(_, __) {
  this.setLogLevel("none");
  this.createFragment(this.#key, `<div></div>`);
  this.trigger("test_signal_3D5CF");
}
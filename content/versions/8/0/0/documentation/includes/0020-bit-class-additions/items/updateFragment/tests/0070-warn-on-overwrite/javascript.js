#key = "fragment_signal_CA48A";

signal_CA48A(_, el) {
  const result = this.updateFragment(this.#key, `<div></div>`);
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_signal_CA48A");
}

given_signal_CA48A(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, `<div></div>`);
  this.trigger("signal_CA48A");
}
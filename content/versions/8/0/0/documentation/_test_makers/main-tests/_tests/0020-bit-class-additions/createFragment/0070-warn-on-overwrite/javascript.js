#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.createFragment(this.#key, `<div></div>`);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLogLevel("none");
  this.createFragment(this.#key, `<div></div>`);
  this.trigger("test_$SIGNAL_NAME");
}
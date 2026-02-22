#key = "fragment_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  this.deleteFragment(this.#key);
  const result = this.loadFragment(this.#key);
  if (result.ok === false) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLogLevel("none");
  this.createFragment(this.#key, "<div></div>");
  this.trigger("test_$SIGNAL_NAME");
}
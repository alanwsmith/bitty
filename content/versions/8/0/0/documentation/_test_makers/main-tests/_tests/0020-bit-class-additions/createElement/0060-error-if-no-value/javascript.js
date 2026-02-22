#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.createElement(this.#key);
  if (result.level === "error") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.trigger("test_$SIGNAL_NAME");
}
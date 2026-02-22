#key = "el_$SIGNAL_NAME";

test_$SIGNAL_NAME(_, el) {
  const result = this.deleteElement(this.#key);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLogLevel("none");
  this.deleteElement(this.#key);
  this.trigger("test_$SIGNAL_NAME");
}
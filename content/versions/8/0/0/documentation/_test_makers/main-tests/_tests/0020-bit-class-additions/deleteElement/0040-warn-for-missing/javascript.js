#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const result = this.deleteElement(this.#key);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement(this.#key);
  this.trigger("$SIGNAL_NAME");
}
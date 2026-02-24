#key = "el_signal_06635";

signal_06635(_, el) {
  const result = this.deleteElement(this.#key);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement(this.#key);
  this.trigger("signal_06635");
}
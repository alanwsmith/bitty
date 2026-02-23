#key = "el_signal_30B5D";

bittyReady() {
  this.trigger("given_signal_30B5D");
}

given_signal_30B5D(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("test_signal_30B5D");
}

test_signal_30B5D(_, el) {
  this.logs = [];
  if (
    this.renderElement(this.#key) === undefined &&
    this.logs[0].level === "error"
  ) {
    el.innerHTML = "ok";
  }
}
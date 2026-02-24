

bittyReady() {
  this.trigger("given_signal_30B5D");
}

given_signal_30B5D(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("signal_30B5D");
}

signal_30B5D(_, el) {
  this.logs = [];
  if (
    this.renderElement("el_30B5D") === undefined &&
    this.logs[0].level === "error"
  ) {
    el.innerHTML = "test passed";
  }
}
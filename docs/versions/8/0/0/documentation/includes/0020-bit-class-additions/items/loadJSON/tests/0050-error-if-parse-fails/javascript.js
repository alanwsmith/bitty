bittyReady() {
  this.trigger("given_signal_F4560");
}

given_signal_F4560(_, __) {
  this.setLocalLogLevel("none");
  this.trigger("signal_F4560");
}

signal_F4560(_, el) {
  const result = this.loadJSON("missing_key_signal_F4560", "invalid json");
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}
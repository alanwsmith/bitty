signal_F4560(_, el) {
  this.setLocalLogLevel("none");
  const result = this.loadJSON("missing_key_signal_F4560", "invalid json");
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}
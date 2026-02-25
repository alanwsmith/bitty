$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  const result = this.loadJSON("missing_key_$SIGNAL_NAME", "invalid json");
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}
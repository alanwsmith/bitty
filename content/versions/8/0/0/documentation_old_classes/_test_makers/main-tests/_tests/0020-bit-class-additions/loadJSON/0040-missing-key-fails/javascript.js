$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  const result = this.loadJSON("missing_key_$SIGNAL_NAME");
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}
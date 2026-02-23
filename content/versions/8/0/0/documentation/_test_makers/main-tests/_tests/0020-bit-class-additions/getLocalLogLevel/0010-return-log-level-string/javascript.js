$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("trace");
  if (this.getLocalLogLevel() === "trace")  {
    el.innerHTML = "test passed";
  }
}

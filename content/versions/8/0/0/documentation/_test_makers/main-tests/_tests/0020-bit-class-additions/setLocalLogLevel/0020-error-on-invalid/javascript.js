test_$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("not-a-valid-level");
  el.innerHTML = "ok";
}
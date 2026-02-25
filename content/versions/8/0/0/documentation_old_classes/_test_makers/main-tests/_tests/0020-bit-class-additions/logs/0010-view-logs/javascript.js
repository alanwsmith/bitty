$SIGNAL_NAME(_, el) {
  if (this.logs() instanceof Array) {
    el.innerHTML = "test passed";
  }
}

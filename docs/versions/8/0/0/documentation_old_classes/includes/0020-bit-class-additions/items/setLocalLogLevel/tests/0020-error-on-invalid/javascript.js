signal_04679(_, el) {
  this.setLocalLogLevel("not-a-valid-level");
  if (this.getLocalLogLevel() === "warn") {
    el.innerHTML = "test passed";
  } else {
    el.innerHTML = "test failed";
  }
}

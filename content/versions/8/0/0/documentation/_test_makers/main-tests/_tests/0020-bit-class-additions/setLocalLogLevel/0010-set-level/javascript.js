$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("info");
  if (this.getLocalLogLevel() === "info") {
    el.innerHTML = "test passed";
  } else {
    el.innerHTML = "test failed";
  }
}

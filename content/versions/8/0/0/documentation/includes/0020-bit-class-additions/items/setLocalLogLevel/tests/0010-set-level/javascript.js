signal_64E6B(_, el) {
  this.setLocalLogLevel("info");
  if (this.getLocalLogLevel() === "info") {
    el.innerHTML = "test passed";
  } else {
    el.innerHTML = "test failed";
  }
}

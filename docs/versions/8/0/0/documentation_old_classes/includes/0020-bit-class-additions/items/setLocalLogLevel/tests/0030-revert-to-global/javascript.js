signal_704D8(_, el) {
  this.setGlobalLogLevel("trace");
  this.setLocalLogLevel("debug");
  this.setLocalLogLevel("global");
  if (this.getLocalLogLevel() === "trace") {
    el.innerHTML = "test passed";
  } else {
    el.innerHTML = "test failed";
  }
}


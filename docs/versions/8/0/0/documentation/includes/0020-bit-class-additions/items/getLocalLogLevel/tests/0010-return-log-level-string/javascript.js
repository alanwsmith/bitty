signal_ED724(_, el) {
  this.setLocalLogLevel("trace");
  if (this.getLocalLogLevel() === "trace")  {
    el.innerHTML = "test passed";
  } else {
    el.innerHTML = "test failed";
  }
}

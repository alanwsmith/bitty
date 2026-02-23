signal_11A34(_, el) {
  this.setGlobalLogLevel("trace");
  if (this.getGlobalLogLevel() === "trace")  {
    el.innerHTML = "test passed";
  } else {
    el.innerHTML = "test failed";
  }
}

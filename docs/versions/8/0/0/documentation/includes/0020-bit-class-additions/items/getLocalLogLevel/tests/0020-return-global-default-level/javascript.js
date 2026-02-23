signal_F7CAA(_, el) {
  this.setGlobalLogLevel("trace");
  if (this.getLocalLogLevel() === "trace")  {
    el.innerHTML = "test passed";
  } else {
    el.innerHTML = "test failed";
  }
}

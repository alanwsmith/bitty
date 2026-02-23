$SIGNAL_NAME(_, el) {
  console.log("HEREERE: $SIGNAL_NAME");
  this.setGlobalLogLevel("trace");
  if (this.getGlobalLogLevel() === "trace")  {
    el.innerHTML = "test passed";
  }
}

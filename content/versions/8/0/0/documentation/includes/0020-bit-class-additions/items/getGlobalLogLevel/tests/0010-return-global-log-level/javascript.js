signal_11A34(_, el) {
  console.log("HEREERE: signal_11A34");
  this.setGlobalLogLevel("trace");
  if (this.getGlobalLogLevel() === "trace")  {
    el.innerHTML = "test passed";
  }
}

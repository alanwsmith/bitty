signal_46146(_, el) {
  this.setGlobalLogLevel("debug");
  if (this.getGlobalLogLevel() === "debug")  {
    el.innerHTML = "test passed";
  } else {
    el.innerHTML = "test failed";
  }
}


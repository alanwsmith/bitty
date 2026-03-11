$SIGNAL_NAME(_, el) {
  this.setGlobalLogLevel("none")
  this.setLocalLogLevel("none")
  const result = this.saveJSON("no-key-with-this-name");
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}


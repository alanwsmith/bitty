$SIGNAL_NAME(_, el) {
  this.setLogLevel("none");
  const result = this.saveJSON("no-key-with-this-name");
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}


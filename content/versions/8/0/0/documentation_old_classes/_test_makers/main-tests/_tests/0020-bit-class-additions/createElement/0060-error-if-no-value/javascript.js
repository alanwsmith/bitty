$SIGNAL_NAME(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.createElement("el_$HASH");
  if (result.level === "error") {
    el.innerHTML = "test passed";
  }
}


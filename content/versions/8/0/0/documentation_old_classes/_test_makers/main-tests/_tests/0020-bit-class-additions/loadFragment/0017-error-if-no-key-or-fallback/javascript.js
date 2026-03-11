$SIGNAL_NAME(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.loadFragment("el_$HASH");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}

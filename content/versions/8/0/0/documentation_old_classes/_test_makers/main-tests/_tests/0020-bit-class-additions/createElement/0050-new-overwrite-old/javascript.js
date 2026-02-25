$SIGNAL_NAME(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.createElement("el_$HASH", "<div></div>");
  const result = this.createElement("el_$HASH", "<div></div>");
  if (result.level === "warn" && result.ok === true) {
    el.innerHTML = "test passed";
  }
}

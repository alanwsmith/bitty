$SIGNAL_NAME(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.deleteElement("el_$SIGNAL_NAME");
  const result = this.loadElement("el_$SIGNAL_NAME");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}
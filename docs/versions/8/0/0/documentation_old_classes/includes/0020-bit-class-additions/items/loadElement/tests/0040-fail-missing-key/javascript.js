signal_94D78(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.deleteElement("el_signal_94D78");
  const result = this.loadElement("el_signal_94D78");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}
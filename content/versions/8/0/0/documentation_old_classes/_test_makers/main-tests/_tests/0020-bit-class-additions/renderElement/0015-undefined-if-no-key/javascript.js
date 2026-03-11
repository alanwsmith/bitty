$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  if (this.renderElement("el_$HASH") === undefined) {
    el.innerHTML = "test passed";
  }
}
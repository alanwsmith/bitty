$SIGNAL_NAME(_, el) {
  if (this.renderElement("el_$HASH") === undefined) {
    el.innerHTML = "test passed";
  }
}
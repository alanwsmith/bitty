$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_$HASH");
  if (this.renderFragment("el_$HASH") === undefined) {
    el.innerHTML = "test passed";
  }
}

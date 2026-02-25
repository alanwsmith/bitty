$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_$HASH");
  const result = this.loadFragment("el_$HASH");
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}

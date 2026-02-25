$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  const result = this.deleteFragment("el_$HASH");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}

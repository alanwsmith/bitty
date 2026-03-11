$SIGNAL_NAME(_, el) {
  const result = this.loadFragment("el_$HASH");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}

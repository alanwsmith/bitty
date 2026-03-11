$SIGNAL_NAME(_, el) {
  const result = this.loadFragment("el_$HASH");
  if (result.ok === true && result.level === "info") {
    el.innerHTML = "test passed";
  }
}

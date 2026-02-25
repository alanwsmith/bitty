signal_B0E93(_, el) {
  this.setLocalLogLevel("none");
  const result = this.deleteFragment("el_B0E93");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}

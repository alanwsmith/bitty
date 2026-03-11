signal_E279E(_, el) {
  this.setLocalLogLevel("none");
  this.deleteFragment("el_E279E");
  const result = this.loadFragment("el_E279E");
  if (result.ok === false) {
    el.innerHTML = "test passed";
  }
}

signal_7EF03(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.loadFragment("el_7EF03");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}

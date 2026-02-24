signal_2F03D(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.createFragment("el_2F03D");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}

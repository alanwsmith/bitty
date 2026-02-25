signal_FE03B(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.createFragment();
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}

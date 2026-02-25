

signal_B7C32(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.createSVG("el_B7C32");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}

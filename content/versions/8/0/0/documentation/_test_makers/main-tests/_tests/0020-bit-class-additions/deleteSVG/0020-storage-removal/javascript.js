$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_$HASH");
  const result = this.loadSVG("el_$HASH");
  console.log(result);
  if (result.level === "error" && result.ok === false) {
    el.innerHTML = "test passed";
  }
}

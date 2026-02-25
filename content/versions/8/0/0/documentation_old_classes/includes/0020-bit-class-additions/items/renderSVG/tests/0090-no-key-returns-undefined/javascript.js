signal_01959(_, el) {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_01959");
  const fragment = this.renderSVG("el_01959");
  if (fragment === undefined) {
    el.innerHTML = "test passed";
  }
}

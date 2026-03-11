$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_$HASH");
  const fragment = this.renderSVG("el_$HASH");
  if (fragment === undefined) {
    el.innerHTML = "test passed";
  }
}

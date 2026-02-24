#key = "svg_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const fragment = this.renderSVG("el_$HASH");
  if (fragment === undefined) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_$HASH");
  this.trigger("$SIGNAL_NAME");
}

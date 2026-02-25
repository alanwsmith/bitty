$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_$HASH");
  if (this.renderSVG("el_$HASH") === undefined) {
    el.innerHTML = "test passed";
  }
}



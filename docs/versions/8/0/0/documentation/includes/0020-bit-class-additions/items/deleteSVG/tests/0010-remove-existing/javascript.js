signal_CB6CF(_, el) {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_CB6CF");
  if (this.renderSVG("el_CB6CF") === undefined) {
    el.innerHTML = "test passed";
  }
}



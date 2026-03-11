signal_D68A0(_, el) {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_D68A0");
  if (this.renderSVG("el_D68A0") === undefined) {    
    el.innerHTML = "test passed";
  }
}

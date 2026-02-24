

$SIGNAL_NAME(_, el) {
  // this.logs = [];
  // this.renderSVG("el_$HASH");
  // if (this.logs[0].ok === false && this.logs[0].level === "error") {
  //   el.innerHTML = "test passed";
  // }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_$HASH");
  this.trigger("$SIGNAL_NAME");
}

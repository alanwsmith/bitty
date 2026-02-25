$SIGNAL_NAME(_, el) {  
  this.setLocalLogLevel("none");
  this.deleteSVG("el_$HASH");
  const result = this.loadSVG("el_$HASH");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}

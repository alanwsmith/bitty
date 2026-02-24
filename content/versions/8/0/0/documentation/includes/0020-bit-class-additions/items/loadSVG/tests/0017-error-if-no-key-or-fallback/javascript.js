signal_DB540(_, el) {  
  this.setLocalLogLevel("none");
  this.deleteSVG("el_DB540");
  const result = this.loadSVG("el_DB540");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}

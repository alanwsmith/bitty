signal_1D251(_, el) {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_1D251");
  const result = this.loadSVG("el_1D251");
  console.log(result);
  if (result.level === "error" && result.ok === false) {
    el.innerHTML = "test passed";
  }
}

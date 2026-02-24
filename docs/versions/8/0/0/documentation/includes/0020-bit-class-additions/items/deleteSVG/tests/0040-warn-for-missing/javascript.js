#key = "svg_signal_A473A";

signal_A473A(_, el) {
  const result = this.deleteSVG("el_A473A");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_A473A");
  this.trigger("signal_A473A");
}
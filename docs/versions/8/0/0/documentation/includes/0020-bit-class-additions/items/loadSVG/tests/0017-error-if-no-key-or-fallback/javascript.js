

signal_DB540(_, el) {
  const result = this.loadSVG("el_DB540");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.trigger("given_signal_DB540");
}

given_signal_DB540(_, __) {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_DB540");
  this.trigger("signal_DB540");
}

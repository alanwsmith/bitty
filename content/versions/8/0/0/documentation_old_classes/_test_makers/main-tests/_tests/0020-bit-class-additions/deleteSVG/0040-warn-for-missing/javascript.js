

$SIGNAL_NAME(_, el) {
  const result = this.deleteSVG("el_$HASH");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG("el_$HASH");
  this.trigger("$SIGNAL_NAME");
}
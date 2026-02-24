$SIGNAL_NAME(_, el) {
  this.setLocalLogLevel("none");
  const result = this.deleteSVG("el_$HASH");
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}


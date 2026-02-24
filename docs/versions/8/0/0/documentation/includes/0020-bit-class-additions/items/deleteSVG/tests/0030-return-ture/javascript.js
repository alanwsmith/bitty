signal_35ED0(_, el) {
  this.setLocalLogLevel("none");
  const result = this.deleteSVG("el_35ED0");
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}


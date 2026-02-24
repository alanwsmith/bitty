$SIGNAL_NAME(_, el) {
  const result = this.deleteSVG("el_$HASH");
  if (result.ok === true) {
    el.innerHTML = "test passed";
  }
}


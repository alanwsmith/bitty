signal_73040(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.createElement("el_73040");
  if (result.level === "error") {
    el.innerHTML = "test passed";
  }
}


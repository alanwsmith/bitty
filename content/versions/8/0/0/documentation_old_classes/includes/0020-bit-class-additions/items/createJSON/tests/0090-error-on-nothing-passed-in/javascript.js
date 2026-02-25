signal_45CAA(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  const result = this.createJSON("el_45CAA");
  if (result.ok === false && result.level === "error") {
    el.innerHTML = "test passed";
  }
}


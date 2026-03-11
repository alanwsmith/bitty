signal_374D9(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.createElement("el_374D9", "<div></div>");
  const result = this.createElement("el_374D9", "<div></div>");
  if (result.level === "warn" && result.ok === true) {
    el.innerHTML = "test passed";
  }
}

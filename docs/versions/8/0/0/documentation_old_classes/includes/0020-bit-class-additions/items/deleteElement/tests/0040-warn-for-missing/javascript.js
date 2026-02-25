

signal_06635(_, el) {
  const result = this.deleteElement("el_06635");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement("el_06635");
  this.trigger("signal_06635");
}
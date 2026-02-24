

signal_DE329(_, el) {
  this.deleteElement("el_DE329");
  const result = this.loadElement("el_DE329");
  if (result.level === "error" && result.ok === false) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_DE329", `<div>ok</div>`);
  this.trigger("signal_DE329");
}
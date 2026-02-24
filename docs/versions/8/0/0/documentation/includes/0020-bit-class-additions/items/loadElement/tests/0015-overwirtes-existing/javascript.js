#key = "el_signal_FFDD5";

signal_FFDD5(_, el) {
  const result = this.loadElement("el_FFDD5");
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.deleteElement("el_FFDD5");
  this.setLocalLogLevel("none");
  this.createElement("el_FFDD5", `<div>ok</div>`);
  this.trigger("signal_FFDD5");
}
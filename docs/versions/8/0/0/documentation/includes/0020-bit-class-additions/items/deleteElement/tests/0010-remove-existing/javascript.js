#key = "el_signal_E84D4";

signal_E84D4(_, el) {
  this.deleteElement("el_E84D4");
  if (this.renderElement("el_E84D4") === undefined) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_E84D4", `<div>ok</div>`);
  this.trigger("signal_E84D4");
}
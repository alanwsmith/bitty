#key = "el_signal_B86EE";

signal_B86EE(_, el) {
  this.loadElement("el_B86EE", `<div class="test">ok</div>`);
  el.replaceWith(this.renderElement("el_B86EE"));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement("el_B86EE");
  this.trigger("signal_B86EE");
}
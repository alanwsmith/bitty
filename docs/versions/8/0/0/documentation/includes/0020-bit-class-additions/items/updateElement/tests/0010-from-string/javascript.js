#key = "element_signal_B814D";

signal_B814D(_, el) {
  this.updateElement("el_B814D", `<div class="test">ok</div>`);
  el.replaceWith(this.renderElement("el_B814D"));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_B814D", `<div class="test">bug</div>`);
  this.trigger("signal_B814D");
}
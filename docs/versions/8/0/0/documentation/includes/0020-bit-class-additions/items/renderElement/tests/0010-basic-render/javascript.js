

signal_3EB4D(_, el) {
  el.replaceWith(this.renderElement("el_3EB4D"));
}


bittyReady() {
  this.createElement("el_3EB4D", `<div class="test">ok</div>`);
  this.trigger("signal_3EB4D");
}
#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  el.replaceWith(this.renderElement("el_$HASH"));
}


bittyReady() {
  this.createElement("el_$HASH", `<div class="test">ok</div>`);
  this.trigger("$SIGNAL_NAME");
}
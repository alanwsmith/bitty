#key = "element_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  this.updateElement("el_$HASH", `<div class="test">ok</div>`);
  el.replaceWith(this.renderElement("el_$HASH"));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.createElement("el_$HASH", `<div class="test">bug</div>`);
  this.trigger("$SIGNAL_NAME");
}
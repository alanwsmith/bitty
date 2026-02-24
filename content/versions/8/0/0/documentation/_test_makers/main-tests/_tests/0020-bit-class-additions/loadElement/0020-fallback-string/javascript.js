#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  this.loadElement("el_$HASH", `<div class="test">ok</div>`);
  el.replaceWith(this.renderElement("el_$HASH"));
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteElement("el_$HASH");
  this.trigger("$SIGNAL_NAME");
}
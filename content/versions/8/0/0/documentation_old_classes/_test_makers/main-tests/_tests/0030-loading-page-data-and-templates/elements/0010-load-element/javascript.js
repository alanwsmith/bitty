#key = "key_$SIGNAL_NAME";

$SIGNAL_NAME(update, el) {
//  el.replaceWith(this.renderElement("el_$HASH"));
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}

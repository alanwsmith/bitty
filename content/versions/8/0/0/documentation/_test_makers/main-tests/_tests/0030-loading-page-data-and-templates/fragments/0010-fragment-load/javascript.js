#key = "key_$SIGNAL_NAME";

$SIGNAL_NAME(update, el) {
//  el.replaceWith(this.renderFragment("el_$HASH").children[1]);
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}

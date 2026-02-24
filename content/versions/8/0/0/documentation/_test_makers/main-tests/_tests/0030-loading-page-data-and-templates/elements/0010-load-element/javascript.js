#key = "key_$SIGNAL_NAME";

$SIGNAL_NAME(update, el) {
//  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}

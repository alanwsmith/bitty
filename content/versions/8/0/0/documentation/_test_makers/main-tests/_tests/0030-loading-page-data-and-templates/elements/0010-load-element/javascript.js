#key = "key_$SIGNAL_NAME";

test_$SIGNAL_NAME(update, el) {
//  el.replaceWith(this.renderElement(this.#key));
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}

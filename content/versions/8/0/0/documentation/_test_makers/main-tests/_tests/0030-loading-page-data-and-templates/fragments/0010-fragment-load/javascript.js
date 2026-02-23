#key = "key_$SIGNAL_NAME";

test_$SIGNAL_NAME(update, el) {
//  el.replaceWith(this.renderFragment(this.#key).children[1]);
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}

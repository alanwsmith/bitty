#key = "key_signal_6E2FF";

test_signal_6E2FF(update, el) {
  el.replaceWith(this.renderFragment(this.#key).children[1]);
}


bittyReady() {
  this.trigger("test_signal_6E2FF");
}
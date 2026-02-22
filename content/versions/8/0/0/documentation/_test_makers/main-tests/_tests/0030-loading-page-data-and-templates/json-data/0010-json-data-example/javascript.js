#key = "key_$SIGNAL_NAME";

test_$SIGNAL_NAME(update, el) {
  el.innerHTML = this.json[this.#key].status;
}


bittyReady() {
  this.trigger("test_$SIGNAL_NAME");
}
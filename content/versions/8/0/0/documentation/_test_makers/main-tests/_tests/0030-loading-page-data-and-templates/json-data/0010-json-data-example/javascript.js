#key = "key_$SIGNAL_NAME";

$SIGNAL_NAME(update, el) {
//  el.innerHTML = this.json[this.#key].status;
}


bittyReady() {
  this.trigger("$SIGNAL_NAME");
}

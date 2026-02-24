#gotSignal = false;
#gotNull = false;

bittyReady() {
  this.trigger("$SIGNAL_NAME");
}

$SIGNAL_NAME(_, x) {
  this.#gotSignal = true;
  if (x === null) {
    this.#gotNull = true;
  }
  this.trigger("verify_$SIGNAL_NAME");
}

verify_$SIGNAL_NAME(_, el) {
  if (this.#gotSignal === true && this.#gotNull === true) {
    el.innerHTML = "ok";
  }
}
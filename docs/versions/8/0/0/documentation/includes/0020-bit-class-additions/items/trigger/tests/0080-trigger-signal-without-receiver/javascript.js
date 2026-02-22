#gotNull = false;

bittyReady() {
  this.trigger("run_signal_A1F39");
}

run_signal_A1F39(_, x) {
  if (x === null) {
    this.#gotNull = true;
  }
  this.trigger("verify_signal_A1F39");
}

verify_signal_A1F39(_, el) {
  if (this.#gotNull === true) {
    el.innerHTML = "ok";
  }
}
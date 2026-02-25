#_elIsNull = false;
#_status;

bittyReady() {
  this.send({ status: "test passed" }, "signal_1EF08");
}

signal_1EF08(payload, x) {
  this.#_status = payload.status;
  if (x === null) {
    this.#_elIsNull = true;
  }
  this.trigger("verify_signal_1EF08");
}

verify_signal_1EF08(_, el) {
  if (this.#_elIsNull === true) {
    el.innerHTML = this.#_status;
  }
}
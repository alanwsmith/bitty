#_elIsNull = false;
#_status;

bittyReady() {
  this.send({ status: "test passed" }, "$SIGNAL_NAME");
}

$SIGNAL_NAME(payload, x) {
  this.#_status = payload.status;
  if (x === null) {
    this.#_elIsNull = true;
  }
  this.trigger("verify_$SIGNAL_NAME");
}

verify_$SIGNAL_NAME(_, el) {
  if (this.#_elIsNull === true) {
    el.innerHTML = this.#_status;
  }
}
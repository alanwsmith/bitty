window.$CLASS_NAME = class {
  #_elIsNull = false;
  #_status;

  bittyReady() {
    this.api.send({ status: "ok" }, "test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(payload, x) {
    this.#_status = payload.status;
    if (x === null) {
      this.#_elIsNull = true;
    }
    this.api.trigger("verify_$SIGNAL_NAME");
  }

  verify_$SIGNAL_NAME(_, el) {
    if (this.#_elIsNull === true) {
      el.innerHTML = this.#_status;
    }
  }
};

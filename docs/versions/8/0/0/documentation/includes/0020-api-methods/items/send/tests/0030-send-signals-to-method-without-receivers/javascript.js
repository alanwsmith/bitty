window.Class5591E = class {
  #_elIsNull = false;
  #_status;

  bittyReady() {
    this.api.send({ status: "ok" }, "test_signal_5591E");
  }

  test_signal_5591E(ev, x) {
    this.#_status = ev.payload.status;
    if (x === null) {
      this.#_elIsNull = true;
    }
    this.api.trigger("verify_signal_5591E");
  }

  verify_signal_5591E(_, el) {
    if (this.#_elIsNull === true) {
      el.innerHTML = this.#_status;
    }
  }
};

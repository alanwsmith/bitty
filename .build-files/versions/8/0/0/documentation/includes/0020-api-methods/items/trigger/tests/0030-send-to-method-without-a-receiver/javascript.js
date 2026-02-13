window.Class63A99 = class {
  #gotSignal = false;
  #gotNull = false;

  bittyReady() {
    this.api.trigger("test_signal_63A99");
  }

  test_signal_63A99(_, x) {
    this.#gotSignal = true;
    if (x === null) {
      this.#gotNull = true;
    }
    this.api.trigger("verify_signal_63A99");
  }

  verify_signal_63A99(_, el) {
    if (this.#gotSignal === true && this.#gotNull === true) {
      el.innerHTML = "ok";
    }
  }
};

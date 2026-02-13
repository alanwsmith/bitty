window.Class53497 = class {
  #gotSignal = false;
  #gotNull = false;

  bittyReady() {
    this.api.trigger("test_signal_53497");
  }

  test_signal_53497(_, x) {
    this.#gotSignal = true;
    if (x === null) {
      this.#gotNull = true;
    }
    this.api.trigger("verify_signal_53497");
  }

  verify_signal_53497(_, el) {
    if (this.#gotSignal === true && this.#gotNull === true) {
      el.innerHTML = "ok";
    }
  }
};

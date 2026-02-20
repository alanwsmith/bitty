window.Class9C35B = class {
  #gotSignal = false;
  #gotNull = false;

  bittyReady() {
    this.trigger("test_signal_9C35B");
  }

  test_signal_9C35B(_, x) {
    this.#gotSignal = true;
    if (x === null) {
      this.#gotNull = true;
    }
    this.trigger("verify_signal_9C35B");
  }

  verify_signal_9C35B(_, el) {
    if (this.#gotSignal === true && this.#gotNull === true) {
      el.innerHTML = "ok";
    }
  }
};

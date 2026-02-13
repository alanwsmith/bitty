window.Class7ABBB = class {
  #gotNull = false;

  bittyReady() {
    this.api.trigger("run_signal_7ABBB");
  }

  run_signal_7ABBB(_, x) {
    if (x === null) {
      this.#gotNull = true;
    }
    this.api.trigger("verify_signal_7ABBB");
  }

  verify_signal_7ABBB(_, el) {
    if (this.#gotNull === true) {
      el.innerHTML = "ok";
    }
  }
};

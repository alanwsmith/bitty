window.$CLASS_NAME = class {
  #gotNull = false;

  bittyReady() {
    this.trigger("run_$SIGNAL_NAME");
  }

  run_$SIGNAL_NAME(_, x) {
    if (x === null) {
      this.#gotNull = true;
    }
    this.trigger("verify_$SIGNAL_NAME");
  }

  verify_$SIGNAL_NAME(_, el) {
    if (this.#gotNull === true) {
      el.innerHTML = "ok";
    }
  }
};

window.$CLASS_NAME = class {
  #confirmation = false;

  bittyReady() {
    this.api.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, __) {
    this.#confirmation = true;
    this.api.trigger("verify_$SIGNAL_NAME");
  }

  verify_$SIGNAL_NAME(_, el) {
    if (this.#confirmation === true) {
      el.innerHTML = "ok";
    }
  }
};

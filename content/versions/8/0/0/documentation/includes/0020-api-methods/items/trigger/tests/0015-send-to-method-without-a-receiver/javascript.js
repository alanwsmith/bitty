window.Class53497 = class {
  #confirmation = false;

  bittyReady() {
    this.api.trigger("test_signal_53497");
  }

  test_signal_53497(_, __) {
    this.#confirmation = true;
    this.api.trigger("verify_signal_53497");
  }

  verify_signal_53497(_, el) {
    if (this.#confirmation === true) {
      el.innerHTML = "ok";
    }
  }
};

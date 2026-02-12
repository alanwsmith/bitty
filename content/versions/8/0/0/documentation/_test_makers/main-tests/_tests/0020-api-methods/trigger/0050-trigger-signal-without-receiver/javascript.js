window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("initial_$SIGNAL_NAME");
  }

  initial_$SIGNAL_NAME(_, __) {
    this.api.trigger("verify_$SIGNAL_NAME");
  }

  verify_$SIGNAL_NAME(_, el) {
    el.innerHTML = "ok";
  }
};

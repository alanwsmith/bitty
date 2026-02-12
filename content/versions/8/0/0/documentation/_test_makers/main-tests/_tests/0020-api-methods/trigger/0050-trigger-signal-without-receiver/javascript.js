window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("run_$SIGNAL_NAME");
  }

  run_$SIGNAL_NAME(_, __) {
    this.api.trigger("verify_$SIGNAL_NAME");
  }

  verify_$SIGNAL_NAME(_, el) {
    el.innerHTML = "ok";
  }
};

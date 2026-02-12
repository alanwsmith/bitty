window.Class5E0C7 = class {
  bittyReady() {
    this.api.trigger("run_signal_5E0C7");
  }

  run_signal_5E0C7(_, __) {
    this.api.trigger("verify_signal_5E0C7");
  }

  verify_signal_5E0C7(_, el) {
    el.innerHTML = "ok";
  }
};

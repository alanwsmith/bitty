window.Class_cbe64 = class {
  bittyReady() {
    this.api.trigger(
      `signal_cbe64 signal_2_cbe64`,
    );
  }

  signal_2_cbe64(_, el) {
    el.innerHTML = "PASSED";
  }
};

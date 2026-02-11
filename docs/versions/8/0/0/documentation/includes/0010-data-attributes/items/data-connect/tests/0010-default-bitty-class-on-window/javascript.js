window.BittyClass = class {
  bittyReady() {
    this.api.trigger("signal_da553");
  }

  signal_da553(_, el) {
    el.innerHTML = "PASSED";
  }
};

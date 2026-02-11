window.BittyClass = class {
  bittyReady() {
    this.api.trigger("signal_DA553");
  }

  signal_DA553(_, el) {
    el.innerHTML = "PASSED";
  }
};

window.Class5EF10 = class {
  bittyReady() {
    this.api.trigger("signal_5EF10");
  }

  signal_5EF10(_, el) {
    el.innerHTML = "PASSED";
  }
};

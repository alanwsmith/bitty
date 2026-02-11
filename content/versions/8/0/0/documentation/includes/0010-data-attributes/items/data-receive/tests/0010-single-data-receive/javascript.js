window.Class90DD9 = class {
  bittyReady() {
    this.api.trigger("signal_90DD9");
  }

  signal_90DD9(_, el) {
    el.innerHTML = "PASSED";
  }
};

window.Class1B2A9 = class {
  bittyReady() {
    this.api.trigger("signal_1B2A9");
  }

  signal_1B2A9(_, el) {
    el.innerHTML = "ok";
  }
};

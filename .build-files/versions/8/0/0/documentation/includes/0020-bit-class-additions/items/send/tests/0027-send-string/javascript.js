window.Class31AF8 = class {
  bittyReady() {
    this.send("ok", "signal_31AF8");
  }

  signal_31AF8(payload, el) {
    el.innerHTML = payload;
  }
};

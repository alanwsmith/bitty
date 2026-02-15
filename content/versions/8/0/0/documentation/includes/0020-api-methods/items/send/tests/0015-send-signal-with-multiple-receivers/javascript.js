window.Class7E257 = class {
  bittyReady() {
    this.api.send({ status: "ok" }, "signal_7E257");
  }

  signal_7E257(payload, el) {
    el.innerHTML = payload.status;
  }
};

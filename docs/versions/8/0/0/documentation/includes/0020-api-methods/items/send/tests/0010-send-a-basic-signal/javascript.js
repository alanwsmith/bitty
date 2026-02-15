window.ClassABC35 = class {
  bittyReady() {
    this.api.send({ status: "ok" }, "signal_ABC35");
  }

  signal_ABC35(payload, el) {
    el.innerHTML = payload.status;
  }
};

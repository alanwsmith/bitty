window.Class7E257 = class {
  bittyReady() {
    this.api.send({ status: "ok" }, "signal_7E257");
  }

  signal_7E257(_, el) {
    el.innerHTML = "ok";
  }
};

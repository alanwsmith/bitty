window.Class7CEE5 = class {
  bittyReady() {
    this.api.trigger("signal_7CEE5");
  }

  async signal_7CEE5(_, el) {
    const t0 = performance.now();
    await this.api.sleep(50);
    const t1 = performance.now();
    if ((t1 - t0) > 45) {
      el.innerHTML = "ok";
    }
  }
};

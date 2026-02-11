window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("$SIGNAL_NAME");
  }

  async $SIGNAL_NAME(_, el) {
    const t0 = performance.now();
    await this.api.sleep(50);
    const t1 = performance.now();
    if ((t1 - t0) > 45) {
      el.innerHTML = "ok";
    }
  }
};

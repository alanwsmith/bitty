window.$CLASS_NAME = class {
  #delta;

  async bittyReady() {
    const t0 = performance.now();
    await this.api.sleep(50);
    const t1 = performance.now();
    this.#delta = t1 - t0;
    this.api.trigger("$SIGNAL_NAME");
  }

  $SIGNAL_NAME(_, el) {
    if (this.#delta > 45) {
      el.innerHTML = "ok";
    }
  }
};

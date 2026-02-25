window.ClassDDC6C = class {
  #delta;

  async bittyReady() {
    const t0 = performance.now();
    await this.api.sleep(50);
    const t1 = performance.now();
    this.#delta = t1 - t0;
    this.api.trigger("signal_DDC6C");
  }

  signal_DDC6C(_, el) {
    if (this.#delta > 45) {
      el.innerHTML = "ok";
    }
  }
};

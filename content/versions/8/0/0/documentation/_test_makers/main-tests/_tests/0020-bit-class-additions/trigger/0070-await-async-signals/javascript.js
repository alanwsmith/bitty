window.$CLASS_NAME = class {
  #t1;

  bittyReady() {
    this.#t1 = performance.now();
    this.trigger("await:test_$SIGNAL_NAME verify_$SIGNAL_NAME");
  }

  async test_$SIGNAL_NAME(_, el) {
    await this.sleep(50);
  }

  verify_$SIGNAL_NAME(_, el) {
    const t2 = performance.now();
    if ((t2 - this.#t1) > 40) {
      el.innerHTML = "ok";
    }
  }
};

window.$CLASS_NAME = class {
  #t1;

  bittyReady() {
    this.#t1 = performance.now();
    this.trigger("run_$SIGNAL_NAME");
  }

  async run_$SIGNAL_NAME(_, __) {
    await this.sleep(25);
    this.trigger("run_$SIGNAL2_NAME");
  }

  async run_$SIGNAL2_NAME(_, __) {
    await this.sleep(25);
    this.trigger("verify_$SIGNAL_NAME");
  }

  verify_$SIGNAL_NAME(_, el) {
    const t2 = performance.now();
    const time2 = t2 - this.#t1;
    if (time2 > 40) {
      el.innerHTML = "ok";
    }
  }
};

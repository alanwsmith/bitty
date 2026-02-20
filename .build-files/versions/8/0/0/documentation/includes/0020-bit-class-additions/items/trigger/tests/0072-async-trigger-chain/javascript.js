window.ClassF6808 = class {
  #t1;

  bittyReady() {
    this.#t1 = performance.now();
    this.trigger("run_signal_F6808");
  }

  async run_signal_F6808(_, __) {
    await this.sleep(25);
    this.trigger("run_signal_F6808_2");
  }

  async run_signal_F6808_2(_, __) {
    await this.sleep(25);
    this.trigger("verify_signal_F6808");
  }

  verify_signal_F6808(_, el) {
    const t2 = performance.now();
    const time2 = t2 - this.#t1;
    if (time2 > 40) {
      el.innerHTML = "ok";
    }
  }
};

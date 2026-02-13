window.Class839AC = class {
  #t1;

  bittyReady() {
    this.#t1 = performance.now();
    this.api.trigger("run_signal_839AC");
  }

  async run_signal_839AC(_, __) {
    await this.api.sleep(25);
    this.api.trigger("run_signal_839AC_2");
  }

  async run_signal_839AC_2(_, __) {
    await this.api.sleep(25);
    this.api.trigger("verify_signal_839AC");
  }

  verify_signal_839AC(_, el) {
    const t2 = performance.now();
    const time2 = t2 - this.#t1;
    if (time2 > 40) {
      el.innerHTML = "ok";
    }
  }
};

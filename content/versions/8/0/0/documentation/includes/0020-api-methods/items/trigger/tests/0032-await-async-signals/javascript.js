window.ClassF445D = class {
  #t1;

  bittyReady() {
    this.#t1 = performance.now();
    this.api.trigger("await:test_signal_F445D verify_signal_F445D");
  }

  async test_signal_F445D(_, el) {
    await this.api.sleep(50);
  }

  verify_signal_F445D(_, el) {
    const t2 = performance.now();
    if ((t2 - this.#t1) > 40) {
      el.innerHTML = "ok";
    }
  }
};

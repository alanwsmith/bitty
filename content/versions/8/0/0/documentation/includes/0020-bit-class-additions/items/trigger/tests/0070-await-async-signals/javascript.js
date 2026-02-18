window.Class8C32F = class {
  #t1;

  bittyReady() {
    this.#t1 = performance.now();
    this.trigger("await:test_signal_8C32F verify_signal_8C32F");
  }

  async test_signal_8C32F(_, el) {
    await this.sleep(50);
  }

  verify_signal_8C32F(_, el) {
    const t2 = performance.now();
    if ((t2 - this.#t1) > 40) {
      el.innerHTML = "ok";
    }
  }
};

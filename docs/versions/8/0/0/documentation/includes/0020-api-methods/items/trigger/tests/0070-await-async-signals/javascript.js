window.Class0BB6A = class {
  #t1;

  bittyReady() {
    this.#t1 = performance.now();
    this.api.trigger("await:test_signal_0BB6A verify_signal_0BB6A");
  }

  async test_signal_0BB6A(_, el) {
    await this.api.sleep(50);
  }

  verify_signal_0BB6A(_, el) {
    const t2 = performance.now();
    if ((t2 - this.#t1) > 40) {
      el.innerHTML = "ok";
    }
  }
};

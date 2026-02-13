window.Class3C651 = class {
  #t1;

  bittyReady() {
    this.#t1 = performance.now();
    this.api.trigger("await:test_signal_3C651 verify_signal_3C651");
  }

  async test_signal_3C651(_, el) {
    await this.api.sleep(50);
  }

  verify_signal_3C651(_, el) {
    const t2 = performance.now();
    if ((t2 - this.#t1) > 40) {
      el.innerHTML = "ok";
    }
  }
};

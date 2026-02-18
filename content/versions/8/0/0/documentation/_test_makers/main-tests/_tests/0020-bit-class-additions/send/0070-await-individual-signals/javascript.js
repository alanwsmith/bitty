window.$CLASS_NAME = class {
  #t1;

  bittyReady() {
    this.#t1 = performance.now();
    this.send(
      { status: "ok" },
      "await:test_$SIGNAL_NAME verify_$SIGNAL_NAME",
    );
  }

  async test_$SIGNAL_NAME(payload, el) {
    await this.sleep(50);
  }

  verify_$SIGNAL_NAME(payload, el) {
    const t2 = performance.now();
    if ((t2 - this.#t1) > 40) {
      el.innerHTML = payload.status;
    }
  }
};

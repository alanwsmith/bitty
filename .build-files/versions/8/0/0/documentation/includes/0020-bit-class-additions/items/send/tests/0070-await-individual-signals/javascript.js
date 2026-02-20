window.Class75189 = class {
  #t1;

  bittyReady() {
    this.#t1 = performance.now();
    this.send(
      { status: "ok" },
      "await:test_signal_75189 verify_signal_75189",
    );
  }

  async test_signal_75189(payload, el) {
    await this.sleep(50);
  }

  verify_signal_75189(payload, el) {
    const t2 = performance.now();
    if ((t2 - this.#t1) > 40) {
      el.innerHTML = payload.status;
    }
  }
};

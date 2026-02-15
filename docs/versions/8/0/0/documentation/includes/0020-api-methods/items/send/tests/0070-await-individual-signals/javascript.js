window.Class8FAC5 = class {
  #t1;

  bittyReady() {
    this.#t1 = performance.now();
    this.api.send(
      { status: "ok" },
      "await:test_signal_8FAC5 verify_signal_8FAC5",
    );
  }

  async test_signal_8FAC5(ev, el) {
    await this.api.sleep(50);
  }

  verify_signal_8FAC5(ev, el) {
    const t2 = performance.now();
    if ((t2 - this.#t1) > 40) {
      el.innerHTML = ev.payload.status;
    }
  }
};

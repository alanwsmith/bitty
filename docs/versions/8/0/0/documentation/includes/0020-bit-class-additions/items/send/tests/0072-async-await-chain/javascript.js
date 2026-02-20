window.ClassC826F = class {
  #_t1;

  bittyReady() {
    this.#_t1 = performance.now();
    this.send({ status: "ok" }, "run_signal_C826F");
  }

  async run_signal_C826F(payload, _) {
    if (payload.status === "ok") {
      await this.sleep(25);
      this.send(payload, "run_signal_C826F_2");
    }
  }

  async run_signal_C826F_2(payload, _) {
    if (payload.status === "ok") {
      await this.sleep(25);
      this.send(payload, "verify_signal_C826F");
    }
  }

  verify_signal_C826F(payload, el) {
    if (payload.status === "ok") {
      const t2 = performance.now();
      const time2 = t2 - this.#_t1;
      if (time2 > 40) {
        el.innerHTML = "ok";
      }
    }
  }
};

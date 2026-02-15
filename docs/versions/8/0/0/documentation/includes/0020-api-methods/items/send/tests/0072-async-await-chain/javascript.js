window.Class03E7C = class {
  #_t1;

  bittyReady() {
    this.#_t1 = performance.now();
    this.api.send({ status: "ok" }, "run_signal_03E7C");
  }

  async run_signal_03E7C(payload, _) {
    if (payload.status === "ok") {
      await this.api.sleep(25);
      this.api.send(payload, "run_signal_03E7C_2");
    }
  }

  async run_signal_03E7C_2(payload, _) {
    if (payload.status === "ok") {
      await this.api.sleep(25);
      this.api.send(payload, "verify_signal_03E7C");
    }
  }

  verify_signal_03E7C(payload, el) {
    if (payload.status === "ok") {
      const t2 = performance.now();
      const time2 = t2 - this.#_t1;
      if (time2 > 40) {
        el.innerHTML = "ok";
      }
    }
  }
};

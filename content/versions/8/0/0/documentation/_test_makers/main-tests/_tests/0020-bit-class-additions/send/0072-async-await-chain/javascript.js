window.$CLASS_NAME = class {
  #_t1;

  bittyReady() {
    this.#_t1 = performance.now();
    this.send({ status: "ok" }, "run_$SIGNAL_NAME");
  }

  async run_$SIGNAL_NAME(payload, _) {
    if (payload.status === "ok") {
      await this.sleep(25);
      this.send(payload, "run_$SIGNAL2_NAME");
    }
  }

  async run_$SIGNAL2_NAME(payload, _) {
    if (payload.status === "ok") {
      await this.sleep(25);
      this.send(payload, "verify_$SIGNAL_NAME");
    }
  }

  verify_$SIGNAL_NAME(payload, el) {
    if (payload.status === "ok") {
      const t2 = performance.now();
      const time2 = t2 - this.#_t1;
      if (time2 > 40) {
        el.innerHTML = "ok";
      }
    }
  }
};

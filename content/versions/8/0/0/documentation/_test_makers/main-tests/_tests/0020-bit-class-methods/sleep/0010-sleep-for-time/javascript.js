window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.t1 = performance.now();
    this.trigger("test_$SIGNAL_NAME");
  }

  async test_$SIGNAL_NAME(_, el) {
    await this.sleep(50);
    this.t2 = performance.now();
    if (this.t2 - this.t1 > 45) {
      el.innerHTML = "ok";
    }
  }
};

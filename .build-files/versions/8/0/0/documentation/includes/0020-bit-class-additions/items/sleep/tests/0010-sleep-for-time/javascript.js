window.Class43632 = class {
  bittyReady() {
    this.trigger("given_signal_43632");
  }

  given_signal_43632(_, __) {
    this.t1 = performance.now();
    this.trigger("test_signal_43632");
  }

  async test_signal_43632(_, el) {
    await this.sleep(50);
    this.t2 = performance.now();
    if (this.t2 - this.t1 > 45) {
      el.innerHTML = "ok";
    }
  }
};

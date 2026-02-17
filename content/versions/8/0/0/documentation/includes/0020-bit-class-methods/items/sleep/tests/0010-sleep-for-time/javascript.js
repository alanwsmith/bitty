window.ClassACBD9 = class {
  bittyReady() {
    this.trigger("given_signal_ACBD9");
  }

  given_signal_ACBD9(_, __) {
    this.t1 = performance.now();
    this.trigger("test_signal_ACBD9");
  }

  async test_signal_ACBD9(_, el) {
    await this.sleep(50);
    this.t2 = performance.now();
    if (this.t2 - this.t1 > 45) {
      el.innerHTML = "ok";
    }
  }
};

window.Class1C2EF = class {
  bittyReady() {
    this.trigger("given_signal_1C2EF");
  }

  given_signal_1C2EF(_, __) {
    this.logLevel = 0;
    this.trigger("test_signal_1C2EF");
  }

  test_signal_1C2EF(_, el) {
    const result = this.removeJSON("data_signal_1C2EF");
    if (result.ok === true && result.level === 2) {
      el.innerHTML = "ok";
    }
  }
};

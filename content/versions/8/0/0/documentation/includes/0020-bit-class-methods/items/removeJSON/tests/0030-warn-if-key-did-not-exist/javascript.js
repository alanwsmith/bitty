window.ClassF90C0 = class {
  bittyReady() {
    this.trigger("given_signal_F90C0");
  }

  given_signal_F90C0(_, __) {
    this.logLevel = 0;
    this.trigger("test_signal_F90C0");
  }

  test_signal_F90C0(_, el) {
    const result = this.removeJSON("data_signal_F90C0");
    if (result.ok === true && result.level === 2) {
      el.innerHTML = "ok";
    }
  }
};

window.ClassC7FB8 = class {
  bittyReady() {
    this.trigger("given_signal_C7FB8");
  }

  given_signal_C7FB8(_, __) {
    this.logLevel = 0;
    this.trigger("test_signal_C7FB8");
  }

  test_signal_C7FB8(_, el) {
    const invalidJSON = "this is not valid JSON";
    const result = this.addJSON("data_signal_C7FB8", invalidJSON);
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

window.ClassCFDE5 = class {
  bittyReady() {
    this.trigger("given_signal_CFDE5");
  }

  given_signal_CFDE5(_, __) {
    this.trigger("test_signal_CFDE5");
  }

  test_signal_CFDE5(_, el) {
    const jsonString = `{}`;
    const result = this.addJSON("data_signal_CFDE5", jsonString);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};

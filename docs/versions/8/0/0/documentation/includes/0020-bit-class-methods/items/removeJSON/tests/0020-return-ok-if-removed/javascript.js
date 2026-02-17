window.Class238F9 = class {
  bittyReady() {
    this.trigger("given_signal_238F9");
  }

  given_signal_238F9(_, __) {
    this.addJSON("data_signal_238F9", `{}`);
    this.trigger("test_signal_238F9");
  }

  test_signal_238F9(_, el) {
    const result = this.removeJSON("data_signal_238F9");
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};

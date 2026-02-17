window.ClassE60E9 = class {
  bittyReady() {
    this.trigger("given_signal_E60E9");
  }

  given_signal_E60E9(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_E60E9");
  }

  test_signal_E60E9(_, el) {
    const result = this.addJSON("data_signal_E60E9");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

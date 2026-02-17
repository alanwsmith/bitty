window.ClassA76D8 = class {
  bittyReady() {
    this.trigger("given_signal_A76D8");
  }

  given_signal_A76D8(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_A76D8");
  }

  test_signal_A76D8(_, el) {
    const invalidJSON = "this is not valid JSON";
    const result = this.addJSON("data_signal_A76D8", invalidJSON);
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

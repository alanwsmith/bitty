window.ClassF4BCA = class {
  bittyReady() {
    this.trigger("given_signal_F4BCA");
  }

  given_signal_F4BCA(_, __) {
    this.trigger("test_signal_F4BCA");
  }

  test_signal_F4BCA(_, el) {
    const jsonString = `{}`;
    const result = this.addJSON("data_signal_F4BCA", jsonString);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};

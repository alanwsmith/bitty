window.ClassB3123 = class {
  bittyReady() {
    this.trigger("given_signal_B3123");
  }

  given_signal_B3123(_, __) {
    this.trigger("test_signal_B3123");
  }

  test_signal_B3123(_, el) {
    const jsonObject = JSON.parse(`{}`);
    const result = this.addJSON("data_signal_B3123", jsonObject);
    if (result.ok === true) {
      //      el.innerHTML = "ok";
    }
  }
};

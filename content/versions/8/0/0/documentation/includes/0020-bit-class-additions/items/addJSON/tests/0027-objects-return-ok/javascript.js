window.ClassF9161 = class {
  bittyReady() {
    this.trigger("given_signal_F9161");
  }

  given_signal_F9161(_, __) {
    this.trigger("test_signal_F9161");
  }

  test_signal_F9161(_, el) {
    const jsonObject = JSON.parse(`{}`);
    const result = this.addJSON("data_signal_F9161", jsonObject);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};

window.Class43A00 = class {
  bittyReady() {
    this.trigger("given_signal_43A00");
  }

  given_signal_43A00(_, __) {
    this.trigger("test_signal_43A00");
  }

  test_signal_43A00(_, el) {
    const jsonObject = JSON.parse(`{}`);
    const result = this.addJSON("data_signal_43A00", jsonObject);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};

window.Class2B80D = class {
  bittyReady() {
    this.trigger("given_signal_2B80D");
  }

  given_signal_2B80D(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_2B80D");
  }

  test_signal_2B80D(_, el) {
    const invalidJSON = "this is not valid JSON";
    const result = this.createJSON("data_signal_2B80D", invalidJSON);
    if (result.ok === false) {
      //      el.innerHTML = "ok";
    }
  }
};

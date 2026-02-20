window.Class45CAA = class {
  bittyReady() {
    this.trigger("given_signal_45CAA");
  }

  given_signal_45CAA(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_45CAA");
  }

  test_signal_45CAA(_, el) {
    const result = this.createJSON("data_signal_45CAA");
    if (result.ok === false) {
      //      el.innerHTML = "ok";
    }
  }
};

window.ClassB4876 = class {
  bittyReady() {
    this.trigger("given_signal_B4876");
  }

  given_signal_B4876(_, __) {
    this.setLogLevel("none");
    this.removeJSON("data_signal_B4876");
    this.trigger("test_signal_B4876");
  }

  test_signal_B4876(_, el) {
    const results = this.renderJSON("data_signal_B4876");
    if (this.logs[1].type === "renderJSON") {
      el.innerHTML = "ok";
    }
  }
};

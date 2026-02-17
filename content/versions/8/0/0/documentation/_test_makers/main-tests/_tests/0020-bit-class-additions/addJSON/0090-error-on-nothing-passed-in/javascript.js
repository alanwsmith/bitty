window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.addJSON("data_$SIGNAL_NAME");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

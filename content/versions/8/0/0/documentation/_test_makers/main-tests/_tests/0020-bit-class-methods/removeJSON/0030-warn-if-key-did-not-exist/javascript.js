window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.logLevel = 0;
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.removeJSON("data_$SIGNAL_NAME");
    if (result.ok === true && result.level === 2) {
      el.innerHTML = "ok";
    }
  }
};

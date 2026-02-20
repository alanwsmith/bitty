window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.deleteJSON("data_$SIGNAL_NAME");
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    }
  }
};

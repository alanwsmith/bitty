window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.consoleLogLevel = 5;
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.loadJSON("missing_key_$SIGNAL_NAME", "invalid json");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

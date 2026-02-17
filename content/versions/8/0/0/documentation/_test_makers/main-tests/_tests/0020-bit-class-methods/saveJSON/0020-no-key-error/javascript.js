window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.consoleLogLevel = 5;
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.saveJSON("no-key-with-this-name");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

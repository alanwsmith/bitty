window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.logLevel = 0;
    localStorage.removeItem("missing_key_$SIGNAL_NAME");
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.loadJSON("missing_key_$SIGNAL_NAME");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    this.addLog(
      "warn",
      "test_$SIGNAL_NAME",
      true,
      "This warning and the upcoming one about setLogLevel being set to an invalid level are expected. They are part of the test suite",
    );
    this.setLogLevel("not-a-valid-level");
    el.innerHTML = "ok";
  }
};

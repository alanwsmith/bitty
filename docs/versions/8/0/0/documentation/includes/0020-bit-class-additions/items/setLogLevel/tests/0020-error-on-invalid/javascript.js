window.ClassE2600 = class {
  bittyReady() {
    this.trigger("given_signal_E2600");
  }

  given_signal_E2600(_, __) {
    this.trigger("test_signal_E2600");
  }

  test_signal_E2600(_, el) {
    this.addLog(
      "warn",
      "test_signal_E2600",
      true,
      "This warning and the upcoming one about setLogLevel being set to an invalid level are expected. They are part of the test suite",
    );
    this.setLogLevel("not-a-valid-level");
    el.innerHTML = "ok";
  }
};

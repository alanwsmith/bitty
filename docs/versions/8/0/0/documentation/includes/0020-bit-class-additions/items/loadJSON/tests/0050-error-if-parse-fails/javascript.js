window.ClassF4560 = class {
  bittyReady() {
    this.trigger("given_signal_F4560");
  }

  given_signal_F4560(_, __) {
    this.logLevel = 0;
    this.trigger("test_signal_F4560");
  }

  test_signal_F4560(_, el) {
    const result = this.loadJSON("missing_key_signal_F4560", "invalid json");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

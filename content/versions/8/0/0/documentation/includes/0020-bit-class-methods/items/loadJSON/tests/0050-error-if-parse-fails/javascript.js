window.Class6FBAC = class {
  bittyReady() {
    this.trigger("given_signal_6FBAC");
  }

  given_signal_6FBAC(_, __) {
    this.logLevel = 0;
    this.trigger("test_signal_6FBAC");
  }

  test_signal_6FBAC(_, el) {
    const result = this.loadJSON("missing_key_signal_6FBAC", "invalid json");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

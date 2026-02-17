window.Class0E048 = class {
  bittyReady() {
    this.trigger("given_signal_0E048");
  }

  given_signal_0E048(_, __) {
    this.logLevel = 0;
    this.trigger("test_signal_0E048");
  }

  test_signal_0E048(_, el) {
    const result = this.saveJSON("no-key-with-this-name");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

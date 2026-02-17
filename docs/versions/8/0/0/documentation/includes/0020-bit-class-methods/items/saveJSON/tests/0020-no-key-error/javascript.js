window.Class9378D = class {
  bittyReady() {
    this.trigger("given_signal_9378D");
  }

  given_signal_9378D(_, __) {
    this.logLevel = 0;
    this.trigger("test_signal_9378D");
  }

  test_signal_9378D(_, el) {
    const result = this.saveJSON("no-key-with-this-name");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

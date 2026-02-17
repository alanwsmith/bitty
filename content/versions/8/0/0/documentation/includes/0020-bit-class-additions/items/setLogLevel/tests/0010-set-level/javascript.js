window.Class94188 = class {
  bittyReady() {
    this.trigger("given_signal_94188");
  }

  given_signal_94188(_, __) {
    this.trigger("test_signal_94188");
  }

  test_signal_94188(_, el) {
    // this.setLogLevel("none");
    this.addLog("error");
    el.innerHTML = "ok";
  }
};

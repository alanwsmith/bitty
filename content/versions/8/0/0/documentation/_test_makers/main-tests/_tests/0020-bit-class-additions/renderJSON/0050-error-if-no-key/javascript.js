window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.removeJSON("data_$SIGNAL_NAME");
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const results = this.renderJSON("data_$SIGNAL_NAME");
    if (this.logs[1].type === "renderJSON") {
      el.innerHTML = "ok";
    }
  }
};

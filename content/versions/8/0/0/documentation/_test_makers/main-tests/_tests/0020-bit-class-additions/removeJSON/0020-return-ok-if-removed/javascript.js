window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.createJSON("data_$SIGNAL_NAME", `{}`);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.removeJSON("data_$SIGNAL_NAME");
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};

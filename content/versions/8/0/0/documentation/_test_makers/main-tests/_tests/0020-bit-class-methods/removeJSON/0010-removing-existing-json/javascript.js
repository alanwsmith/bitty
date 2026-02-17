window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.addJSON("data_$SIGNAL_NAME", `{}`);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    this.removeJSON("data_$SIGNAL_NAME");
    if (this.json["data_$SIGNAL_NAME"] === undefined) {
      el.innerHTML = "ok";
    }
  }
};

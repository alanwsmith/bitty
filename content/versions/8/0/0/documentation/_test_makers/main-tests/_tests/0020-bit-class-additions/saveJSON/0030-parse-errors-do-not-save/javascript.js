window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.json["invalid_json"] = "not json";
    this.logLevel = 0;
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.saveJSON("invalid_json");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

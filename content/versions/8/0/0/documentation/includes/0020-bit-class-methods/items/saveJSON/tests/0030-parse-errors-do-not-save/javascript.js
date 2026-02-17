window.Class9230C = class {
  bittyReady() {
    this.trigger("given_signal_9230C");
  }

  given_signal_9230C(_, __) {
    this.json["invalid_json"] = "not json";
    this.logLevel = 0;
    this.trigger("test_signal_9230C");
  }

  test_signal_9230C(_, el) {
    const result = this.saveJSON("invalid_json");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

window.Class47EC2 = class {
  bittyReady() {
    this.trigger("given_signal_47EC2");
  }

  given_signal_47EC2(_, __) {
    this.json["invalid_json"] = "not json";
    this.setLogLevel("none");
    this.trigger("test_signal_47EC2");
  }

  test_signal_47EC2(_, el) {
    const result = this.saveJSON("invalid_json");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

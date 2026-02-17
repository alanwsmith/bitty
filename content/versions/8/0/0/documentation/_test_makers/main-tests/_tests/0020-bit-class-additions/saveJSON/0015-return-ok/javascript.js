window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.json["data_$SIGNAL_NAME"] = JSON.parse(`{ "status": "ok" }`);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.saveJSON("data_$SIGNAL_NAME");
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};

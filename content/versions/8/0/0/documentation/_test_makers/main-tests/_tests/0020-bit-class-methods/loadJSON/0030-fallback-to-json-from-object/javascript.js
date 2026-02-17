window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const fallback = JSON.parse(`{ "status": "ok" }`);
    const result = this.loadJSON("test_$SIGNAL_NAME", fallback);
    if (result.ok === true) {
      el.innerHTML = this.json["test_$SIGNAL_NAME"].status;
    }
  }
};

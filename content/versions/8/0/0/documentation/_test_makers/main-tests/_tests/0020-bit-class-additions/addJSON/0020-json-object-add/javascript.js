window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const jsonObject = JSON.parse(`{ "status": "ok" }`);
    this.addJSON("data_$SIGNAL_NAME", jsonObject);
    el.innerHTML = this.json["data_$SIGNAL_NAME"].status;
  }
};

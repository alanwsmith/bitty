window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.json["test_$SIGNAL_NAME"] = JSON.parse(
      `{ "status": "failed to overwrite"}`,
    );
    const jsonAsString = `{ "data": { "status": "ok"} }`;
    localStorage.setItem("data_$SIGNAL_NAME", jsonAsString);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.loadJSON("data_$SIGNAL_NAME");
    if (result.ok === true) {
      el.innerHTML = this.json["data_$SIGNAL_NAME"].status;
    }
  }
};

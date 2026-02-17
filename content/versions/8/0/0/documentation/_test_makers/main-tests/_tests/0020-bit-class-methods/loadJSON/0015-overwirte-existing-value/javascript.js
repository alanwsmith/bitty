window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.json["test_$SIGNAL_NAME"] = JSON.parse(
      `{ "status": "failed to overwrite"}`,
    );
    const jsonAsString = `{ "data": { "status": "ok"} }`;
    localStorage.setItem("test_$SIGNAL_NAME", jsonAsString);
    this.trigger("verify_$SIGNAL_NAME");
  }

  verify_$SIGNAL_NAME(_, el) {
    const result = this.loadJSON("test_$SIGNAL_NAME");
    if (result.ok === true) {
      el.innerHTML = this.json["test_$SIGNAL_NAME"].status;
    }
  }
};

window.Class59B7E = class {
  bittyReady() {
    this.trigger("given_signal_59B7E");
  }

  given_signal_59B7E(_, __) {
    this.trigger("test_signal_59B7E");
  }

  test_signal_59B7E(_, el) {
    const jsonString = `{ "status": "ok" }`;
    this.addJSON("data_signal_59B7E", jsonString);
    el.innerHTML = this.json["data_signal_59B7E"].status;
  }
};

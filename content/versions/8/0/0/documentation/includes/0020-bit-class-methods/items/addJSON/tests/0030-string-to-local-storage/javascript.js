window.Class30E8A = class {
  bittyReady() {
    this.trigger("given_signal_30E8A");
  }

  given_signal_30E8A(_, __) {
    this.trigger("test_signal_30E8A");
  }

  test_signal_30E8A(_, el) {
    const jsonString = `{ "status": "ok" }`;
    this.addJSON("data_signal_30E8A", jsonString);
    el.innerHTML = this.json["data_signal_30E8A"].status;
  }
};

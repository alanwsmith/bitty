window.Class12A9E = class {
  bittyReady() {
    this.trigger("given_signal_12A9E");
  }

  given_signal_12A9E(_, __) {
    const initialObject = { status: "failed" };
    this.addJSON("data_signal_12A9E", initialObject);
    this.trigger("test_signal_12A9E");
  }

  test_signal_12A9E(_, el) {
    const overwritingObject = { status: "ok" };
    this.addJSON("data_signal_12A9E", overwritingObject);
    el.innerHTML = this.json["data_signal_12A9E"].status;
  }
};

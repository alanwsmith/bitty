window.Class079AF = class {
  bittyReady() {
    this.trigger("given_signal_079AF");
  }

  given_signal_079AF(_, __) {
    const initialObject = { status: "failed" };
    this.addJSON("data_signal_079AF", initialObject);
    this.trigger("test_signal_079AF");
  }

  test_signal_079AF(_, el) {
    const overwritingObject = { status: "ok" };
    this.addJSON("data_signal_079AF", overwritingObject);
    el.innerHTML = this.json["data_signal_079AF"].status;
  }
};

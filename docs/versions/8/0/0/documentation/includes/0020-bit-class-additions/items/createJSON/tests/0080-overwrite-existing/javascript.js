window.ClassB76EB = class {
  bittyReady() {
    this.trigger("given_signal_B76EB");
  }

  given_signal_B76EB(_, __) {
    const initialObject = { status: "failed" };
    this.addJSON("data_signal_B76EB", initialObject);
    this.trigger("test_signal_B76EB");
  }

  test_signal_B76EB(_, el) {
    const overwritingObject = { status: "ok" };
    this.addJSON("data_signal_B76EB", overwritingObject);
    //    el.innerHTML = this.json["data_signal_B76EB"].status;
  }
};

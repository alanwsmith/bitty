window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    const initialObject = { status: "failed" };
    this.addJSON("data_$SIGNAL_NAME", initialObject);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const overwritingObject = { status: "ok" };
    this.addJSON("data_$SIGNAL_NAME", overwritingObject);
    //    el.innerHTML = this.json["data_$SIGNAL_NAME"].status;
  }
};

window.Class3A164 = class {
  bittyReady() {
    this.trigger("given_signal_3A164");
  }

  given_signal_3A164(_, __) {
    this.trigger("test_signal_3A164");
  }

  test_signal_3A164(_, el) {
    const jsObject = { status: "ok" };
    this.addJSON("data_signal_3A164", jsObject);
    el.innerHTML = this.json["data_signal_3A164"].status;
  }
};

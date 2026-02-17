window.Class76F82 = class {
  bittyReady() {
    this.trigger("given_signal_76F82");
  }

  given_signal_76F82(_, __) {
    this.trigger("test_signal_76F82");
  }

  test_signal_76F82(_, el) {
    const jsonString = `{ "status": "ok" }`;
    this.addJSON("data_signal_76F82", jsonString);
    el.innerHTML = this.json["data_signal_76F82"].status;
  }
};

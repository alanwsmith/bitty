window.Class230A6 = class {
  bittyReady() {
    this.trigger("given_signal_230A6");
  }

  given_signal_230A6(_, __) {
    localStorage.removeItem("data_signal_230A6");
    this.trigger("test_signal_230A6");
  }

  test_signal_230A6(_, el) {
    const fallback = JSON.parse(`{ "status": "ok" }`);
    const result = this.loadJSON("data_signal_230A6", fallback);
    if (result.ok === true) {
      el.innerHTML = this.json["data_signal_230A6"].status;
    }
  }
};

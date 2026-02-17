window.ClassAF434 = class {
  bittyReady() {
    this.trigger("given_signal_AF434");
  }

  given_signal_AF434(_, __) {
    this.json["data_signal_AF434"] = JSON.parse(`{ "status": "ok" }`);
    this.trigger("test_signal_AF434");
  }

  test_signal_AF434(_, el) {
    const result = this.saveJSON("data_signal_AF434");
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};

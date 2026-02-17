window.ClassE097F = class {
  bittyReady() {
    this.trigger("given_signal_E097F");
  }

  given_signal_E097F(_, __) {
    this.json["data_signal_E097F"] = JSON.parse(`{ "status": "ok" }`);
    this.trigger("test_signal_E097F");
  }

  test_signal_E097F(_, el) {
    this.saveJSON("data_signal_E097F");
    const verify = JSON.parse(localStorage.getItem("data_signal_E097F"));
    el.innerHTML = verify.data.status;
  }
};

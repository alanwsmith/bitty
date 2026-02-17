window.ClassD1B73 = class {
  bittyReady() {
    this.trigger("given_signal_D1B73");
  }

  given_signal_D1B73(_, __) {
    this.json["data_signal_D1B73"] = JSON.parse(`{ "status": "ok" }`);
    this.trigger("test_signal_D1B73");
  }

  test_signal_D1B73(_, el) {
    this.saveJSON("data_signal_D1B73");
    const verify = JSON.parse(localStorage.getItem("data_signal_D1B73"));
    el.innerHTML = verify.data.status;
  }
};

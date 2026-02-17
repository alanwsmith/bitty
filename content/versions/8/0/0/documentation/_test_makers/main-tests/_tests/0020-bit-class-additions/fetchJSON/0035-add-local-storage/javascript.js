window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  async given_$SIGNAL_NAME(_, __) {
    const url = "/[@ file.parent @]/payloads/valid-json.json";
    await this.fetchJSON("data_$SIGNAL_NAME", url);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const verify = JSON.parse(localStorage.getItem("data_$SIGNAL_NAME")).data;
    el.innerHTML = verify.status;
  }
};

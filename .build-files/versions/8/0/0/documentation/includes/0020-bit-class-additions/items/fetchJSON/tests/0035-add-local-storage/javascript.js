window.ClassCEAF0 = class {
  bittyReady() {
    this.trigger("given_signal_CEAF0");
  }

  async given_signal_CEAF0(_, __) {
    const url = "/[@ file.parent @]/payloads/valid-json.json";
    await this.fetchJSON("data_signal_CEAF0", url);
    this.trigger("test_signal_CEAF0");
  }

  test_signal_CEAF0(_, el) {
    const verify = JSON.parse(localStorage.getItem("data_signal_CEAF0")).data;
    el.innerHTML = verify.status;
  }
};

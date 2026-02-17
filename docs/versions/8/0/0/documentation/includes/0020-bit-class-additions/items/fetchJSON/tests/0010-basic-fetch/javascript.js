window.Class125F4 = class {
  bittyReady() {
    this.trigger("given_signal_125F4");
  }

  given_signal_125F4(_, __) {
    this.trigger("test_signal_125F4");
  }

  async test_signal_125F4(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-json.json";
    await this.fetchJSON("data_signal_125F4", url);
    el.innerHTML = this.json["data_signal_125F4"].status;
  }
};

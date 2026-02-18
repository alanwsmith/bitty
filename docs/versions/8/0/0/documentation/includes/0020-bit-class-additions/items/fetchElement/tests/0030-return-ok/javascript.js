window.Class0938C = class {
  bittyReady() {
    this.trigger("given_signal_0938C");
  }

  given_signal_0938C(_, __) {
    this.trigger("test_signal_0938C");
  }

  async test_signal_0938C(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element/";
    await this.fetchElement("data_signal_0938C", url);
    // el.innerHTML = this.json["data_signal_0938C"].status;
  }
};

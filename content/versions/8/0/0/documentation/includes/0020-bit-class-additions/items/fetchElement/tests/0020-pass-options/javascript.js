window.Class37F0A = class {
  bittyReady() {
    this.trigger("given_signal_37F0A");
  }

  given_signal_37F0A(_, __) {
    this.trigger("test_signal_37F0A");
  }

  async test_signal_37F0A(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element/";
    await this.fetchElement("data_signal_37F0A", url);
    // el.innerHTML = this.json["data_signal_37F0A"].status;
  }
};

window.Class4BF4A = class {
  bittyReady() {
    this.trigger("given_signal_4BF4A");
  }

  given_signal_4BF4A(_, __) {
    this.trigger("test_signal_4BF4A");
  }

  async test_signal_4BF4A(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element/";
    await this.fetchElement("data_signal_4BF4A", url);
    // el.innerHTML = this.json["data_signal_4BF4A"].status;
  }
};

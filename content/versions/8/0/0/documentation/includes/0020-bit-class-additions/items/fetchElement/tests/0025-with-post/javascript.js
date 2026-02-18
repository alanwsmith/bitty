window.Class1B0DC = class {
  bittyReady() {
    this.trigger("given_signal_1B0DC");
  }

  given_signal_1B0DC(_, __) {
    this.trigger("test_signal_1B0DC");
  }

  async test_signal_1B0DC(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element/";
    await this.fetchElement("data_signal_1B0DC", url);
    // el.innerHTML = this.json["data_signal_1B0DC"].status;
  }
};

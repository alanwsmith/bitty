window.ClassEFEFA = class {
  bittyReady() {
    this.trigger("given_signal_EFEFA");
  }

  given_signal_EFEFA(_, __) {
    this.trigger("test_signal_EFEFA");
  }

  async test_signal_EFEFA(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element/";
    await this.fetchElement("data_signal_EFEFA", url);
    // el.innerHTML = this.json["data_signal_EFEFA"].status;
  }
};

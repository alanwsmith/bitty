window.Class97CD8 = class {
  bittyReady() {
    this.trigger("given_signal_97CD8");
  }

  given_signal_97CD8(_, __) {
    this.trigger("test_signal_97CD8");
  }

  async test_signal_97CD8(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    await this.fetchElement("data_signal_97CD8", url);
    // el.innerHTML = this.json["data_signal_97CD8"].status;
  }
};

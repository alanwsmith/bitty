window.Class92749 = class {
  bittyReady() {
    this.trigger("given_signal_92749");
  }

  given_signal_92749(_, __) {
    this.trigger("test_signal_92749");
  }

  async test_signal_92749(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element/";
    await this.fetchElement("data_signal_92749", url);
    // el.innerHTML = this.json["data_signal_92749"].status;
  }
};

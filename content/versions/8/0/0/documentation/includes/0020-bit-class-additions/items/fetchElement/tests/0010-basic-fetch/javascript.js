window.Class49058 = class {
  bittyReady() {
    this.trigger("given_signal_49058");
  }

  given_signal_49058(_, __) {
    this.trigger("test_signal_49058");
  }

  async test_signal_49058(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    await this.fetchElement("data_signal_49058", url);
    el.innerHTML = this.element["data_signal_49058"].innerHTML;
  }
};

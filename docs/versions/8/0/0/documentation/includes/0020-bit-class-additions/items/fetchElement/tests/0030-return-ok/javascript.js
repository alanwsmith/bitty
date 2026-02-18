window.Class0938C = class {
  bittyReady() {
    this.trigger("given_signal_0938C");
  }

  given_signal_0938C(_, __) {
    this.trigger("test_signal_0938C");
  }

  async test_signal_0938C(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    const result = await this.fetchElement("data_signal_0938C", url);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};

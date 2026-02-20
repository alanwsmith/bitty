window.ClassE0510 = class {
  bittyReady() {
    this.trigger("given_signal_E0510");
  }

  given_signal_E0510(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_E0510");
  }

  async test_signal_E0510(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
    const result = await this.fetchElement("data_signal_E0510", url);
    if (
      result.level === "warn" &&
      this.element["data_signal_E0510"].innerHTML === "first"
    ) {
      //el.innerHTML = "ok";
    }
  }
};

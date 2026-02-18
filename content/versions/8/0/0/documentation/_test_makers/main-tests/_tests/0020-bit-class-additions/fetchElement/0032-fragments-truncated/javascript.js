window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.trigger("test_$SIGNAL_NAME");
  }

  async test_$SIGNAL_NAME(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
    const result = await this.fetchElement("data_$SIGNAL_NAME", url);
    if (
      result.level === "warn" &&
      this.element["data_$SIGNAL_NAME"].innerHTML === "first"
    ) {
      el.innerHTML = "ok";
    }
  }
};

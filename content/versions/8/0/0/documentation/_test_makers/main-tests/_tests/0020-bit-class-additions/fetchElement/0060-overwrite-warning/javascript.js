window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.addElement("el_$SIGNAL_NAME", `<div>first</div>`);
    this.trigger("test_$SIGNAL_NAME");
  }

  async test_$SIGNAL_NAME(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    const result = await this.fetchElement("el_$SIGNAL_NAME", url);
    if (result.level === "warn" && result.ok === true) {
      //      el.innerHTML = "ok";
    }
  }
};

window.Class97CD8 = class {
  bittyReady() {
    this.trigger("given_signal_97CD8");
  }

  given_signal_97CD8(_, __) {
    this.setLogLevel("none");
    this.addElement("el_signal_97CD8", `<div>first</div>`);
    this.trigger("test_signal_97CD8");
  }

  async test_signal_97CD8(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    const result = await this.fetchElement("el_signal_97CD8", url);
    if (result.level === "warn" && result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};

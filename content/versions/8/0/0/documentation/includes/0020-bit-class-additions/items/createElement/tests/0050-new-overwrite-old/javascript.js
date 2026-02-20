window.Class374D9 = class {
  bittyReady() {
    this.trigger("given_signal_374D9");
  }

  given_signal_374D9(_, __) {
    this.setLogLevel("none");
    this.addElement("el_signal_374D9", "<div>bug</div>");
    this.trigger("test_signal_374D9");
  }

  test_signal_374D9(_, el) {
    const result = this.addElement("el_signal_374D9", "<div>ok</div>");
    if (result.level === "warn") {
      //el.innerHTML = this.element["el_signal_374D9"].innerHTML;
    }
  }
};

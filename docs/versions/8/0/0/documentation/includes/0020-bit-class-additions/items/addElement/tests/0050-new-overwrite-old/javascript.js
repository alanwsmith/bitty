window.Class758B2 = class {
  bittyReady() {
    this.trigger("given_signal_758B2");
  }

  given_signal_758B2(_, __) {
    this.addElement("el_signal_758B2", "<div>bug</div>");
    this.trigger("test_signal_758B2");
  }

  test_signal_758B2(_, el) {
    const result = this.addElement("el_signal_758B2", "<div>ok</div>");
    if (result.level === "warn") {
      el.innerHTML = this.element["el_signal_758B2"].innerHTML;
    }
  }
};

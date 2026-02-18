window.Class3CB11 = class {
  bittyReady() {
    this.trigger("given_signal_3CB11");
  }

  given_signal_3CB11(_, __) {
    this.trigger("test_signal_3CB11");
  }

  test_signal_3CB11(_, el) {
    const elementString = `<div>ok</div>`;
    this.addElement("el_signal_3CB11", elementString);
    el.innerHTML = this.element["el_signal_3CB11"].innerHTML;
  }
};

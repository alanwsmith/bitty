window.Class07129 = class {
  bittyReady() {
    this.trigger("given_signal_07129");
  }

  given_signal_07129(_, __) {
    this.trigger("test_signal_07129");
  }

  test_signal_07129(_, el) {
    const elementString = `<div>ok</div>`;
    const result = this.addElement("el_signal_07129", elementString);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};

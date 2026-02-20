window.ClassEE7C0 = class {
  bittyReady() {
    this.trigger("given_signal_EE7C0");
  }

  given_signal_EE7C0(_, __) {
    this.trigger("test_signal_EE7C0");
  }

  test_signal_EE7C0(_, el) {
    const elementString = `<div>ok</div>`;
    const result = this.addElement("el_signal_EE7C0", elementString);
    if (result.ok === true) {
      //      el.innerHTML = "ok";
    }
  }
};

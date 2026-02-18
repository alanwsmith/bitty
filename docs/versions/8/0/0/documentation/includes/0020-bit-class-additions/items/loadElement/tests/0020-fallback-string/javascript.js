window.ClassB86EE = class {
  bittyReady() {
    this.trigger("given_signal_B86EE");
  }

  given_signal_B86EE(_, __) {
    this.trigger("test_signal_B86EE");
  }

  test_signal_B86EE(_, el) {
    this.loadElement("el_signal_B86EE", `<div>ok</div>`);
    el.innerHTML = this.element["el_signal_B86EE"].innerHTML;
  }
};

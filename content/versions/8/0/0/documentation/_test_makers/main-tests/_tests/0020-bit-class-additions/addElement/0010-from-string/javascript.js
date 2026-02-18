window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const elementString = `<div>ok</div>`;
    this.addElement("el_$SIGNAL_NAME", elementString);
    el.innerHTML = this.element["el_$SIGNAL_NAME"].innerHTML;
  }
};

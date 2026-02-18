window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.removeElement("el_$SIGNAL_NAME");
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    this.loadElement("el_$SIGNAL_NAME", `<div>ok</div>`);
    el.innerHTML = this.element["el_$SIGNAL_NAME"].innerHTML;
  }
};

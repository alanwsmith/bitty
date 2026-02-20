window.ClassC54A9 = class {
  bittyReady() {
    this.trigger("given_signal_C54A9");
  }

  given_signal_C54A9(_, __) {
    this.trigger("test_signal_C54A9");
  }

  test_signal_C54A9(_, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    this.addElement("el_signal_C54A9", newEl);
    // el.innerHTML = this.element["el_signal_C54A9"].innerHTML;
  }
};

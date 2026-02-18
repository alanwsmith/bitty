window.ClassDCCBD = class {
  bittyReady() {
    this.trigger("given_signal_DCCBD");
  }

  given_signal_DCCBD(_, __) {
    this.trigger("test_signal_DCCBD");
  }

  test_signal_DCCBD(_, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    this.addElement("el_signal_DCCBD", newEl);
    el.innerHTML = this.element["el_signal_DCCBD"].innerHTML;
  }
};

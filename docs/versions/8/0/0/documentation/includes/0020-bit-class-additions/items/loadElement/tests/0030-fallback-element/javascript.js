window.Class31037 = class {
  bittyReady() {
    this.trigger("given_signal_31037");
  }

  given_signal_31037(_, __) {
    this.trigger("test_signal_31037");
  }

  test_signal_31037(_, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    this.loadElement("el_signal_31037", newEl);
    el.innerHTML = this.element["el_signal_31037"].innerHTML;
  }
};

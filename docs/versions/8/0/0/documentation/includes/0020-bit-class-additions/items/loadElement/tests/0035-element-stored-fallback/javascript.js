window.Class31502 = class {
  bittyReady() {
    this.trigger("given_signal_31502");
  }

  given_signal_31502(_, __) {
    this.removeElement("el_signal_31502");
    this.trigger("test_signal_31502");
  }

  test_signal_31502(_, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    this.loadElement("el_signal_31502", newEl);
    delete this.element["el_signal_31502"];
    this.loadElement("el_signal_31502");
    el.innerHTML = this.element["el_signal_31502"].innerHTML;
  }
};

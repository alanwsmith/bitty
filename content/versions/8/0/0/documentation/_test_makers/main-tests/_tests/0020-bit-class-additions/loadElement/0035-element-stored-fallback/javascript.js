window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.removeElement("el_$SIGNAL_NAME");
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    this.loadElement("el_$SIGNAL_NAME", newEl);
    delete this.element["el_$SIGNAL_NAME"];
    this.loadElement("el_$SIGNAL_NAME");
    el.innerHTML = this.element["el_$SIGNAL_NAME"].innerHTML;
  }
};

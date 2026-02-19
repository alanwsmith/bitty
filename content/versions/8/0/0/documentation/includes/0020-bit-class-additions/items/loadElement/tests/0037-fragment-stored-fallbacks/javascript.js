window.Class2B7D0 = class {
  bittyReady() {
    this.trigger("given_signal_2B7D0");
  }

  given_signal_2B7D0(_, __) {
    this.setLogLevel("none");
    this.removeElement("el_signal_2B7D0");
    this.trigger("test_signal_2B7D0");
  }

  test_signal_2B7D0(_, el) {
    const newFragment = document.createDocumentFragment();
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    newFragment.appendChild(newEl);
    this.loadElement("el_signal_2B7D0", newFragment);
    delete this.element["el_signal_2B7D0"];
    this.loadElement("el_signal_2B7D0");
    el.innerHTML = this.element["el_signal_2B7D0"].innerHTML;
  }
};

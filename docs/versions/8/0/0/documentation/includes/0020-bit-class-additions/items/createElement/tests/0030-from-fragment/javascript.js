window.ClassDA138 = class {
  bittyReady() {
    this.trigger("given_signal_DA138");
  }

  given_signal_DA138(_, __) {
    this.trigger("test_signal_DA138");
  }

  test_signal_DA138(_, el) {
    const newFragment = document.createDocumentFragment();
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    newFragment.appendChild(newEl);
    this.addElement("el_signal_DA138", newFragment);
    //el.innerHTML = this.element["el_signal_DA138"].innerHTML;
  }
};

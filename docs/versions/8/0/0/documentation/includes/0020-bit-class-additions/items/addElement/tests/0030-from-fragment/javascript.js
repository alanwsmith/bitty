window.ClassA2A32 = class {
  bittyReady() {
    this.trigger("given_signal_A2A32");
  }

  given_signal_A2A32(_, __) {
    this.trigger("test_signal_A2A32");
  }

  test_signal_A2A32(_, el) {
    const newFragment = document.createDocumentFragment();
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    newFragment.appendChild(newEl);
    this.addElement("el_signal_A2A32", newFragment);
    el.innerHTML = this.element["el_signal_A2A32"].innerHTML;
  }
};

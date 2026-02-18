window.Class1D78E = class {
  bittyReady() {
    this.trigger("given_signal_1D78E");
  }

  given_signal_1D78E(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_1D78E");
  }

  test_signal_1D78E(_, el) {
    const newFragment = document.createDocumentFragment();
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    newFragment.appendChild(newEl);
    const newEl2 = document.createElement("div");
    newEl2.innerHTML = "ok";
    newFragment.appendChild(newEl2);
    const result = this.addElement("el_signal_1D78E", newFragment);
    if (result.level === "warn" && result.ok === true) {
      el.innerHTML = this.element["el_signal_1D78E"].innerHTML;
    }
  }
};

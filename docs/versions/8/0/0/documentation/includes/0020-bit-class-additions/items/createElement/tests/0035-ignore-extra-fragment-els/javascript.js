window.Class148BC = class {
  bittyReady() {
    this.trigger("given_signal_148BC");
  }

  given_signal_148BC(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_148BC");
  }

  test_signal_148BC(_, el) {
    const newFragment = document.createDocumentFragment();
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    newFragment.appendChild(newEl);
    const newEl2 = document.createElement("div");
    newEl2.innerHTML = "ok";
    newFragment.appendChild(newEl2);
    const result = this.addElement("el_signal_148BC", newFragment);
    if (result.level === "warn" && result.ok === true) {
      //el.innerHTML = this.element["el_signal_148BC"].innerHTML;
    }
  }
};

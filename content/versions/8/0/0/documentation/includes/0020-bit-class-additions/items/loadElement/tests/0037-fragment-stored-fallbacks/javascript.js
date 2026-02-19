window.Class2B7D0 = class {
  #key = "el_signal_2B7D0";

  bittyReady() {
    this.trigger("given_signal_2B7D0");
  }

  given_signal_2B7D0(_, __) {
    this.setLogLevel("none");
    this.removeElement(this.#key);
    this.trigger("test_signal_2B7D0");
  }

  test_signal_2B7D0(_, el) {
    const newFragment = document.createDocumentFragment();
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    newFragment.appendChild(newEl);
    this.loadElement(this.#key, newFragment);
    delete this.element[this.#key];
    this.loadElement(this.#key);
    el.innerHTML = this.element[this.#key].innerHTML;
  }
};

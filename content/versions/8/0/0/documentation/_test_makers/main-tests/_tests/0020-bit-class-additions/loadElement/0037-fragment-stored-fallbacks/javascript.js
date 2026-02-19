window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.removeElement(this.#key);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
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

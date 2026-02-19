window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.removeElement(this.#key);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    this.loadElement(this.#key, newEl);
    el.innerHTML = this.element[this.#key].innerHTML;
  }
};

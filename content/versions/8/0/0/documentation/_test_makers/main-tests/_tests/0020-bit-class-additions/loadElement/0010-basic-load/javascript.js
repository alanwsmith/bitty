window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.removeElement(this.#key);
    this.addElement(this.#key, `<div>ok</div>`);
    delete this.element[this.#key];
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    this.loadElement(this.#key);
    el.innerHTML = this.element[this.#key].innerHTML;
  }
};

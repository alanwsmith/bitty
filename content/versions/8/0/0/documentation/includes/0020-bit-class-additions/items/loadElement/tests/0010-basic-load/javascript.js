window.Class23191 = class {
  #key = "el_signal_23191";

  bittyReady() {
    this.trigger("given_signal_23191");
  }

  given_signal_23191(_, __) {
    this.removeElement(this.#key);
    this.addElement(this.#key, `<div>ok</div>`);
    delete this.element[this.#key];
    this.trigger("test_signal_23191");
  }

  test_signal_23191(_, el) {
    this.loadElement(this.#key);
    el.innerHTML = this.element[this.#key].innerHTML;
  }
};

window.ClassE84D4 = class {
  #key = "el_signal_E84D4";

  bittyReady() {
    this.trigger("given_signal_E84D4");
  }

  given_signal_E84D4(_, __) {
    this.addElement(this.#key, `<div>ok</div>`);
    this.trigger("test_signal_E84D4");
  }

  test_signal_E84D4(_, el) {
    this.removeElement(this.#key);
    if (this.element[this.#key] === undefined) {
      el.innerHTML = "ok";
    }
  }
};

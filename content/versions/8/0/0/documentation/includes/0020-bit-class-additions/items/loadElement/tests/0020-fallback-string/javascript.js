window.ClassB86EE = class {
  #key = "el_signal_B86EE";

  bittyReady() {
    this.trigger("given_signal_B86EE");
  }

  given_signal_B86EE(_, __) {
    this.removeElement(this.#key);
    this.trigger("test_signal_B86EE");
  }

  test_signal_B86EE(_, el) {
    this.loadElement(this.#key, `<div>ok</div>`);
    el.innerHTML = this.element[this.#key].innerHTML;
  }
};

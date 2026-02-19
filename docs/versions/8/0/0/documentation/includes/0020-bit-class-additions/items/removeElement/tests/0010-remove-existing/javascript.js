window.ClassF7221 = class {
  #key = "el_signal_F7221";

  bittyReady() {
    this.trigger("given_signal_F7221");
  }

  given_signal_F7221(_, __) {
    this.addElement(this.#key, `<div>ok</div>`);
    this.trigger("test_signal_F7221");
  }

  test_signal_F7221(_, el) {
    this.removeElement(this.#key);
    if (this.element[this.#key] === undefined) {
      el.innerHTML = "ok";
    }
  }
};

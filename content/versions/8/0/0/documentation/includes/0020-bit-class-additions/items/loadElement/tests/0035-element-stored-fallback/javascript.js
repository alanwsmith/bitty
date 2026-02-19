window.Class31502 = class {
  #key = "el_signal_31502";

  bittyReady() {
    this.trigger("given_signal_31502");
  }

  given_signal_31502(_, __) {
    this.removeElement(this.#key);
    this.trigger("test_signal_31502");
  }

  test_signal_31502(_, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    this.loadElement(this.#key, newEl);
    delete this.element[this.#key];
    this.loadElement(this.#key);
    el.innerHTML = this.element[this.#key].innerHTML;
  }
};

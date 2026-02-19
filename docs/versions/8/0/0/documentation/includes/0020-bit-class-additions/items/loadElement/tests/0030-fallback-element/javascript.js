window.Class31037 = class {
  #key = "el_signal_31037";

  bittyReady() {
    this.trigger("given_signal_31037");
  }

  given_signal_31037(_, __) {
    this.removeElement(this.#key);
    this.trigger("test_signal_31037");
  }

  test_signal_31037(_, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "ok";
    this.loadElement(this.#key, newEl);
    el.innerHTML = this.element[this.#key].innerHTML;
  }
};

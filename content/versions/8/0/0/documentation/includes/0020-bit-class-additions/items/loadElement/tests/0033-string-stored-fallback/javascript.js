window.Class9D350 = class {
  #key = "el_signal_9D350";

  bittyReady() {
    this.trigger("given_signal_9D350");
  }

  given_signal_9D350(_, __) {
    this.removeElement(this.#key);
    this.trigger("test_signal_9D350");
  }

  test_signal_9D350(_, el) {
    this.loadElement(this.#key, `<div>ok</div>`);
    delete this.element[this.#key];
    this.loadElement(this.#key);
    el.innerHTML = this.element[this.#key].innerHTML;
  }
};

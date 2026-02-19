window.Class8D266 = class {
  #key = "el_signal_8D266";

  test_signal_8D266(_, el) {
    this.saveElement(this.#key);
    delete this.element[this.#key];
    this.loadElement(this.#key);
    el.innerHTML = this.element[this.#key].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_8D266");
  }

  given_signal_8D266(_, __) {
    this.addElement(this.#key, "<div>failed</div>");
    this.element[this.#key].innerHTML = "ok";
    this.trigger("test_signal_8D266");
  }
};

window.Class8D266 = class {
  #key = "el_signal_8D266";

  bittyReady() {
    this.trigger("given_signal_8D266");
  }

  given_signal_8D266(_, __) {
    this.addElement(this.#key, "<div>ok</div>");
    localStorage.removeItem(`bittyElement_` + this.#key);
    this.trigger("test_signal_8D266");
  }

  test_signal_8D266(_, el) {
    this.saveElement(this.#key);
    this.loadElement(this.#key);
    // console.log(this.element[this.#key]);
    el.innerHTML = this.element[this.#key].innerHTML;
  }
};

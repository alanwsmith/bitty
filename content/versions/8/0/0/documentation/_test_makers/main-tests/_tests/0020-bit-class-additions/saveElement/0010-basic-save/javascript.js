window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.addElement(this.#key, "<div>ok</div>");
    localStorage.removeItem(`bittyElement_` + this.#key);
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    this.saveElement(this.#key);
    this.loadElement(this.#key);
    // console.log(this.element[this.#key]);
    el.innerHTML = this.element[this.#key].innerHTML;
  }
};

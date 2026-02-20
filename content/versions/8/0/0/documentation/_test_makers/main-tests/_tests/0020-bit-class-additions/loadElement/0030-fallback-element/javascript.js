window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const newEl = document.createElement("div");
    newEl.classList.add("test");
    newEl.innerHTML = "ok";
    this.loadElement(this.#key, newEl);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.deleteElement(this.#key);
    this.trigger("test_$SIGNAL_NAME");
  }
};

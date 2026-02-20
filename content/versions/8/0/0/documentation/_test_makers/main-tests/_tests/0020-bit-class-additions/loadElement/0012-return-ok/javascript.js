window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const result = this.loadElement(this.#key);
    if (result.ok === true && result.level === "info") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.removeElement(this.#key);
    this.addElement(this.#key, `<div>ok</div>`);
    delete this.element[this.#key];
    this.trigger("test_$SIGNAL_NAME");
  }
};

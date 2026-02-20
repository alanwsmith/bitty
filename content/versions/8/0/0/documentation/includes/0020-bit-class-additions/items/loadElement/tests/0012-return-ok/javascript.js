window.ClassBB0D2 = class {
  #key = "el_signal_BB0D2";

  test_signal_BB0D2(_, el) {
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
    this.trigger("test_signal_BB0D2");
  }
};

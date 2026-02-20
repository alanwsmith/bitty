window.ClassFFDD5 = class {
  #key = "el_signal_FFDD5";

  test_signal_FFDD5(_, el) {
    const result = this.loadElement(this.#key);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.deleteElement(this.#key);
    this.setLogLevel("none");
    this.createElement(this.#key, `<div>ok</div>`);
    this.trigger("test_signal_FFDD5");
  }
};

window.ClassDE329 = class {
  #key = "el_signal_DE329";

  test_signal_DE329(_, el) {
    this.deleteElement(this.#key);
    const result = this.loadElement(this.#key);
    if (result.level === "error" && result.ok === false) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.createElement(this.#key, `<div>ok</div>`);
    this.trigger("test_signal_DE329");
  }
};

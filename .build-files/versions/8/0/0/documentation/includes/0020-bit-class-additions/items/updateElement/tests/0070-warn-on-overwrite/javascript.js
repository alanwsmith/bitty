window.Class846F3 = class {
  #key = "element_signal_846F3";

  test_signal_846F3(_, el) {
    const result = this.updateElement(this.#key, `<div></div>`);
    if (result.ok === true && result.level === "info") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.createElement(this.#key, `<div></div>`);
    this.trigger("test_signal_846F3");
  }
};

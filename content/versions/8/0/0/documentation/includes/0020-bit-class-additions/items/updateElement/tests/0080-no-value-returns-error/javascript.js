window.ClassC95B6 = class {
  #key = "element_signal_C95B6";

  test_signal_C95B6(_, el) {
    const result = this.updateElement(this.#key);
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.createElement(this.#key, `<div></div>`);
    this.trigger("test_signal_C95B6");
  }
};

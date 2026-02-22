window.$CLASS_NAME = class {
  #key = "element_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const result = this.updateElement(this.#key, {
      key: "not a string, element, or document fragment",
    });
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
    this.trigger("test_$SIGNAL_NAME");
  }
};

window.ClassEE7C0 = class {
  #key = "el_signal_EE7C0";

  test_signal_EE7C0(_, el) {
    const elementString = `<div>ok</div>`;
    const result = this.createElement(this.#key, elementString);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_EE7C0");
  }
};

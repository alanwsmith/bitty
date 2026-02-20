window.ClassC54A9 = class {
  #key = "el_signal_C54A9";

  test_signal_C54A9(_, el) {
    const newEl = document.createElement("div");
    newEl.classList.add("test");
    newEl.innerHTML = "ok";
    this.createElement(this.#key, newEl);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_C54A9");
  }
};

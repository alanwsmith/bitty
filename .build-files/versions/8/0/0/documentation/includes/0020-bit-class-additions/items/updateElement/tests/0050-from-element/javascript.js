window.Class45896 = class {
  #key = "element_signal_45896";

  test_signal_45896(newElement, el) {
    this.updateElement(this.#key, newElement);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.createElement(this.#key, `<div class="test">bug</div>`);
    const element = document.createElement("div");
    element.classList.add("test");
    element.innerHTML = "ok";
    this.send(element, "test_signal_45896");
  }
};

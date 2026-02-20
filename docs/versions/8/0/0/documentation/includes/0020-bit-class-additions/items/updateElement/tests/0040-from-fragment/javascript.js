window.Class66521 = class {
  #key = "element_signal_66521";

  test_signal_66521(newElement, el) {
    this.updateElement(this.#key, newElement);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.createElement(this.#key, `<div class="test">bug</div>`);
    const fragment = document.createDocumentFragment();
    const element = document.createElement("div");
    element.classList.add("test");
    element.innerHTML = "ok";
    fragment.appendChild(element);
    this.send(fragment, "test_signal_66521");
  }
};

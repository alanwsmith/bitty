window.ClassDA138 = class {
  #key = "el_signal_DA138";

  test_signal_DA138(_, el) {
    const template = document.createElement("template");
    template.innerHTML = `<div class="test">ok</div>`;
    this.createElement(this.#key, template.content);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_DA138");
  }
};

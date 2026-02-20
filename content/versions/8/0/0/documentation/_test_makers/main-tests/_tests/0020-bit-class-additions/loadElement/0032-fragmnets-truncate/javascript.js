window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const template = document.createElement("template");
    template.innerHTML = `<div></div><div></div>`;
    const result = this.loadElement(this.#key, template.content);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    }

    // el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.removeElement(this.#key);
    this.trigger("test_$SIGNAL_NAME");
  }
};

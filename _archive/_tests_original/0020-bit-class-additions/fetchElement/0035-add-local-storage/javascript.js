window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(_, el) {
    this.loadElement(this.#key);
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  async bittyReady() {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    await this.fetchElement(this.#key, url);
    delete this._element[this.#key];
    this.trigger("test_$SIGNAL_NAME");
  }
};

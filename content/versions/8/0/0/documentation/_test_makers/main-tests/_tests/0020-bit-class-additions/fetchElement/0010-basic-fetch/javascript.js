window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    await this.fetchElement(this.#key, url);
    console.log(this.renderElement(this.#key));
    el.replaceWith(this.renderElement(this.#key));
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_$SIGNAL_NAME");
  }
};

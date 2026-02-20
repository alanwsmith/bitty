window.$CLASS_NAME = class {
  #key = "el_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
    const result = await this.fetchElement(this.#key, url);
    if (
      result.level === "warn"
    ) {
      el.replaceWith(this.renderElement(this.#key));
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.trigger("test_$SIGNAL_NAME");
  }
};

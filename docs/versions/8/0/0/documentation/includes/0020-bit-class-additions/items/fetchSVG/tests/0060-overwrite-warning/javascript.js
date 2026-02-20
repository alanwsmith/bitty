window.ClassB1D68 = class {
  #key = "el_signal_B1D68";

  async test_signal_B1D68(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    const result = await this.fetchElement(this.#key, url);
    if (result.level === "warn" && result.ok === true) {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.createElement(this.#key, `<div>first</div>`);
    this.trigger("test_signal_B1D68");
  }
};

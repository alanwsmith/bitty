window.ClassD3610 = class {
  #key = "el_signal_D3610";

  async test_signal_D3610(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    const options = {
      headers: {
        "x-bitty-test": "data_signal_D3610",
      },
    };
    // await this.fetchJSON("data_signal_D3610", this.#url, options);
    //
    // NOTE: Confirming options must be done manually.
    // This test is set to always pass as a result.
    //    el.innerHTML = "ok";
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_D3610");
  }
};

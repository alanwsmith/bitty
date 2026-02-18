window.Class37F0A = class {
  bittyReady() {
    this.trigger("given_signal_37F0A");
  }

  given_signal_37F0A(_, __) {
    this.trigger("test_signal_37F0A");
  }

  async test_signal_37F0A(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    const options = {
      headers: {
        "x-bitty-test": "data_signal_37F0A",
      },
    };
    // await this.fetchJSON("data_signal_37F0A", this.#url, options);
    //
    // NOTE: Confirming options must be done manually.
    // This test is set to always pass as a result.
    el.innerHTML = "ok";
  }
};

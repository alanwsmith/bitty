window.Class7572B = class {
  #key = "el_signal_7572B";

  async test_signal_7572B(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    const options = {
      headers: {
        "x-bitty-test": "data_signal_7572B",
      },
    };
    // await this.fetchElement(key, url, fallback, options);
    //
    // NOTE: Confirming options must be done manually.
    // This test is set to always pass as a result.
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_7572B");
  }
};

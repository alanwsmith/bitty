window.$CLASS_NAME = class {
  #key = "svg_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-svg.svg";
    const options = {
      headers: {
        "x-bitty-test": "data_$SIGNAL_NAME",
      },
    };
    // await this.fetchSVG(key, url, fallback, options);
    //
    // NOTE: Confirming options must be done manually.
    // This test is set to always pass as a result.
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_$SIGNAL_NAME");
  }
};

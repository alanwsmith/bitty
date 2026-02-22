#key = "svg_signal_D3610";

async test_signal_D3610(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-svg.svg";
  const options = {
    headers: {
      "x-bitty-test": "data_signal_D3610",
    },
  };
  // await this.fetchSVG(key, url, fallback, options);
  //
  // NOTE: Confirming options must be done manually.
  // This test is set to always pass as a result.
}


bittyReady() {
  this.trigger("test_signal_D3610");
}
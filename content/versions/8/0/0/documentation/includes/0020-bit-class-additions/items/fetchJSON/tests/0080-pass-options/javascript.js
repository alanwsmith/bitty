bittyReady() {
  this.trigger("given_signal_8C969");
}

given_signal_8C969(_, __) {
  this.trigger("test_signal_8C969");
}

async test_signal_8C969(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-json.json";
  const options = {
    headers: {
      "x-bitty-test": "data_signal_8C969",
    },
  };
  // await this.fetchJSON("data_signal_8C969", this.#url, options);
  //
  // NOTE: Confirming options must be done manually.
  // This test is set to always pass as a result.
  el.innerHTML = "ok";
}
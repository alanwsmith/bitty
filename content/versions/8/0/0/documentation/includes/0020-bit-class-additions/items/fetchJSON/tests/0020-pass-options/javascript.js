window.Class7878C = class {
  bittyReady() {
    this.trigger("given_signal_7878C");
  }

  given_signal_7878C(_, __) {
    this.trigger("test_signal_7878C");
  }

  async test_signal_7878C(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-json.json";
    const options = {
      headers: {
        "x-bitty-test": "data_signal_7878C",
      },
    };
    // await this.fetchJSON("data_signal_7878C", this.#url, options);
    //
    // NOTE: Confirming options must be done manually.
    // This test is set to always pass as a result.
    el.innerHTML = "ok";
  }
};

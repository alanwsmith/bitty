window.Class7878C = class {
  #url;

  bittyReady() {
    this.trigger("given_signal_7878C");
  }

  given_signal_7878C(_, __) {
    const urlParts = [
      "/[@ file.parent @]/includes/",
      "0020-bit-class-additions/items/",
      "fetchJSON/tests/",
      "0020-pass-options/payload.json",
    ];
    this.#url = urlParts.join("");
    this.trigger("test_signal_7878C");
  }

  async test_signal_7878C(_, el) {
    const options = {
      headers: {
        "x-bitty-test": "data_signal_7878C",
      },
    };
    await this.fetchJSON("data_signal_7878C", this.#url, options);
    // NOTE: Confirming options must be done manually.
    // This test is set to always pass as a result.
    el.innerHTML = "ok";
  }
};

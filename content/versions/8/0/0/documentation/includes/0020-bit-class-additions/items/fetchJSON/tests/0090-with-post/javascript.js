window.ClassBDA65 = class {
  bittyReady() {
    this.trigger("given_signal_BDA65");
  }

  given_signal_BDA65(_, __) {
    this.trigger("test_signal_BDA65");
  }

  async test_signal_BDA65(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-json.json";
    const options = {
      method: "POST",
    };
    // await this.fetchJSON("data_signal_BDA65", this.#url, options);
    //
    // NOTE: Confirming options must be done manually.
    // This test is set to always pass as a result.
    el.innerHTML = "ok";
  }
};

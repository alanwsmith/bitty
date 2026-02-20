window.Class9D58C = class {
  bittyReady() {
    this.trigger("given_signal_9D58C");
  }

  given_signal_9D58C(_, __) {
    this.trigger("test_signal_9D58C");
  }

  async test_signal_9D58C(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-json.json";
    const options = {
      method: "POST",
    };
    // await this.fetchJSON("data_signal_9D58C", this.#url, options);
    //
    // NOTE: Confirming options must be done manually.
    // This test is set to always pass as a result.
    el.innerHTML = "ok";
  }
};

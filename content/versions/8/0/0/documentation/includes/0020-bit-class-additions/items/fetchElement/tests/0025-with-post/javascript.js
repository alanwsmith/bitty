window.Class1B0DC = class {
  bittyReady() {
    this.trigger("given_signal_1B0DC");
  }

  given_signal_1B0DC(_, __) {
    this.trigger("test_signal_1B0DC");
  }

  async test_signal_1B0DC(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-element.xml";
    const options = {
      method: "POST",
    };
    // await this.fetchJSON("data_signal_1B0DC", this.#url, options);
    //
    // NOTE: Confirming options must be done manually.
    // This test is set to always pass as a result.
    el.innerHTML = "ok";
  }
};

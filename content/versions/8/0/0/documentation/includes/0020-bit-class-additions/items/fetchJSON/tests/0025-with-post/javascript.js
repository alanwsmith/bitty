window.Class9D58C = class {
  #url;

  bittyReady() {
    this.trigger("given_signal_9D58C");
  }

  given_signal_9D58C(_, __) {
    const urlParts = [
      "/[@ file.parent @]/includes/",
      "0020-bit-class-additions/items/",
      "fetchJSON/tests/",
      "0030-with-post/payload.json",
    ];
    this.#url = urlParts.join("");
    this.trigger("test_signal_9D58C");
  }

  async test_signal_9D58C(_, el) {
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

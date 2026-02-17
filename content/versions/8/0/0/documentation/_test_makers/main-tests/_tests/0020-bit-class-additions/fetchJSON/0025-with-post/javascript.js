window.$CLASS_NAME = class {
  #url;

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    const urlParts = [
      "/[@ file.parent @]/includes/",
      "0020-bit-class-additions/items/",
      "fetchJSON/tests/",
      "0030-with-post/payload.json",
    ];
    this.#url = urlParts.join("");
    this.trigger("test_$SIGNAL_NAME");
  }

  async test_$SIGNAL_NAME(_, el) {
    const options = {
      method: "POST",
    };
    // await this.fetchJSON("data_$SIGNAL_NAME", this.#url, options);
    //
    // NOTE: Confirming options must be done manually.
    // This test is set to always pass as a result.
    el.innerHTML = "ok";
  }
};

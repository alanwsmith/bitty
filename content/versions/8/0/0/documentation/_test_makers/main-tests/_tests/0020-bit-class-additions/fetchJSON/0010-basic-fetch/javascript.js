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
      "0010-basic-fetch/payload.json",
    ];
    this.#url = urlParts.join("");
    this.trigger("test_$SIGNAL_NAME");
  }

  async test_$SIGNAL_NAME(_, el) {
    await this.fetchJSON("data_$SIGNAL_NAME", this.#url);
    el.innerHTML = this.json["data_$SIGNAL_NAME"].status;
  }
};

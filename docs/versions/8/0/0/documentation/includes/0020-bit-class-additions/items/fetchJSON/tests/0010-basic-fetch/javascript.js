window.Class125F4 = class {
  #url;

  bittyReady() {
    this.trigger("given_signal_125F4");
  }

  given_signal_125F4(_, __) {
    const urlParts = [
      "/[@ file.parent @]/includes/",
      "0020-bit-class-additions/items/",
      "fetchJSON/tests/",
      "0010-basic-fetch/payload.json",
    ];
    this.#url = urlParts.join("");
    this.trigger("test_signal_125F4");
  }

  async test_signal_125F4(_, el) {
    await this.fetchJSON("data_signal_125F4", this.#url);
    el.innerHTML = this.json["data_signal_125F4"].status;
  }
};

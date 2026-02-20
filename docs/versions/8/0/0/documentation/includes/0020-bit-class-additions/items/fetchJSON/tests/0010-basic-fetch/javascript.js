window.Class125F4 = class {
  #key = "json_signal_125F4";

  async test_signal_125F4(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-json.json";
    await this.fetchJSON(this.#key, url);
    el.innerHTML = this.json[this.#key].status;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_125F4");
  }
};

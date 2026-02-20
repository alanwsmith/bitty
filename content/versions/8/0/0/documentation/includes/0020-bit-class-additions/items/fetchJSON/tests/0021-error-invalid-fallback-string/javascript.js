window.Class8E522 = class {
  #key = "json_signal_8E522";

  async test_signal_8E522(_, el) {
    const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
    const fallback = `invalid json`;
    const result = await this.fetchJSON(this.#key, url, fallback);
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.trigger("test_signal_8E522");
  }
};

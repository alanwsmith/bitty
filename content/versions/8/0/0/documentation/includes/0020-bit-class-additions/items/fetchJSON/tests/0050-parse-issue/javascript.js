window.Class4734F = class {
  #key = "json_signal_4734F";

  async test_signal_4734F(_, el) {
    const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
    const result = await this.fetchJSON(this.#key, url);
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.trigger("test_signal_4734F");
  }
};

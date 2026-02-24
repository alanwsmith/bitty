window.$CLASS_NAME = class {
  #key = "json_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(_, el) {
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
    this.trigger("test_$SIGNAL_NAME");
  }
};

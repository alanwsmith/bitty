window.$CLASS_NAME = class {
  #key = "json_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(_, el) {
    const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
    const fallback = JSON.parse(`{ "status": "ok" }`);
    const result = await this.fetchJSON(this.#key, url, fallback);
    if (result.ok === true && result.level === "warn") {
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

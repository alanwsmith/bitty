window.$CLASS_NAME = class {
  #key = "json_$SIGNAL_NAME";

  async test_$SIGNAL_NAME(_, el) {
    const url = "/intentionally-missing-file.json";
    const fallback = JSON.parse(`{ "status": "ok" }`);
    const result = await this.fetchJSON(this.#key, url, fallback);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = this.json[this.#key].status;
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

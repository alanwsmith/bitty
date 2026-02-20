window.ClassC0D64 = class {
  #key = "json_signal_C0D64";

  async test_signal_C0D64(_, el) {
    const url = "/intentionally-missing-file.json";
    const fallback = { "status": "ok" };
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
    this.trigger("test_signal_C0D64");
  }
};

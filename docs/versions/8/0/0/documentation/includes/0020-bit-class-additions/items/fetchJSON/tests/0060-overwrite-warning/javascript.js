window.Class78263 = class {
  bittyReady() {
    this.trigger("given_signal_78263");
  }

  given_signal_78263(_, __) {
    this.setLogLevel("none");
    this.addJSON("data_signal_78263", {});
    this.trigger("test_signal_78263");
  }

  async test_signal_78263(_, el) {
    const url = "/[@ file.parent @]/payloads/valid-json.json";
    const result = await this.fetchJSON("data_signal_78263", url);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    }
  }
};

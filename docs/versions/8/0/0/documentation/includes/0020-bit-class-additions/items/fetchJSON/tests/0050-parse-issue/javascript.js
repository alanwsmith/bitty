window.Class4734F = class {
  bittyReady() {
    this.trigger("given_signal_4734F");
  }

  given_signal_4734F(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_4734F");
  }

  async test_signal_4734F(_, el) {
    const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
    const result = await this.fetchJSON("data_signal_4734F", url);
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

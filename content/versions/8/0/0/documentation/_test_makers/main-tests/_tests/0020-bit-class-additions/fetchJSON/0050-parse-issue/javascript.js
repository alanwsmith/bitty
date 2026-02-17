window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.trigger("test_$SIGNAL_NAME");
  }

  async test_$SIGNAL_NAME(_, el) {
    const url = "/[@ file.parent @]/payloads/invalid-json.xjson";
    const result = await this.fetchJSON("data_$SIGNAL_NAME", url);
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

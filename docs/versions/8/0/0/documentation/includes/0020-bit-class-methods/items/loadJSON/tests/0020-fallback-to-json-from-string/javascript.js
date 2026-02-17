window.Class75A3F = class {
  bittyReady() {
    this.trigger("given_signal_75A3F");
  }

  given_signal_75A3F(_, __) {
    this.trigger("test_signal_75A3F");
  }

  test_signal_75A3F(_, el) {
    const result = this.loadJSON("test_signal_75A3F", `{ "status": "ok" }`);
    if (result.ok === true) {
      el.innerHTML = this.json["test_signal_75A3F"].status;
    }
  }
};

window.ClassD77DE = class {
  bittyReady() {
    this.trigger("given_signal_D77DE");
  }

  given_signal_D77DE(_, __) {
    this.trigger("test_signal_D77DE");
  }

  test_signal_D77DE(_, el) {
    const fallback = JSON.parse(`{ "status": "ok" }`);
    const result = this.loadJSON("test_signal_D77DE", fallback);
    if (result.ok === true) {
      el.innerHTML = this.json["test_signal_D77DE"].status;
    }
  }
};

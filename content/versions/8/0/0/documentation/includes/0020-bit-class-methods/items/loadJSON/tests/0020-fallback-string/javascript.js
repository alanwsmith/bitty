window.Class9925C = class {
  bittyReady() {
    this.trigger("given_signal_9925C");
  }

  given_signal_9925C(_, __) {
    this.trigger("test_signal_9925C");
  }

  test_signal_9925C(_, el) {
    const result = this.loadJSON("test_signal_9925C", `{ "status": "ok" }`);
    if (result.ok === true) {
      el.innerHTML = this.json["test_signal_9925C"].status;
    }
  }
};

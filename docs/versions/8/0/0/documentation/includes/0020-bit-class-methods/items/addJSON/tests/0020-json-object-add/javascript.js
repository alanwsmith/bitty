window.Class9E4A9 = class {
  bittyReady() {
    this.trigger("given_signal_9E4A9");
  }

  given_signal_9E4A9(_, __) {
    this.trigger("test_signal_9E4A9");
  }

  test_signal_9E4A9(_, el) {
    const jsonObject = JSON.parse(`{ "status": "ok" }`);
    this.addJSON("data_signal_9E4A9", jsonObject);
    el.innerHTML = this.json["data_signal_9E4A9"].status;
  }
};

window.ClassCEE9A = class {
  bittyReady() {
    this.trigger("given_signal_CEE9A");
  }

  given_signal_CEE9A(_, __) {
    localStorage.removeItem("data_signal_CEE9A");
    this.trigger("test_signal_CEE9A");
  }

  test_signal_CEE9A(_, el) {
    const result = this.loadJSON("data_signal_CEE9A", `{ "status": "ok" }`);
    if (result.ok === true) {
      el.innerHTML = this.json["data_signal_CEE9A"].status;
    }
  }
};

window.Class4B0E0 = class {
  bittyReady() {
    this.trigger("given_signal_4B0E0");
  }

  given_signal_4B0E0(_, __) {
    const jsonAsString = `{ "data": { "status": "ok"} }`;
    localStorage.setItem("test_signal_4B0E0", jsonAsString);
    this.trigger("test_signal_4B0E0");
  }

  test_signal_4B0E0(_, el) {
    const result = this.loadJSON("test_signal_4B0E0");
    if (result.ok === true) {
      el.innerHTML = this.json["test_signal_4B0E0"].status;
    }
  }
};

window.ClassC89F4 = class {
  bittyReady() {
    this.trigger("given_signal_C89F4");
  }

  given_signal_C89F4(_, __) {
    const jsonAsString = `{ "data": { "status": "ok"} }`;
    localStorage.setItem("test_signal_C89F4", jsonAsString);
    this.trigger("test_signal_C89F4");
  }

  test_signal_C89F4(_, el) {
    const result = this.loadJSON("test_signal_C89F4");
    if (result.ok === true) {
      el.innerHTML = this.json["test_signal_C89F4"].status;
    }
  }
};

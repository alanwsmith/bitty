window.ClassC89F4 = class {
  bittyReady() {
    this.trigger("given_signal_C89F4");
  }

  given_signal_C89F4(_, __) {
    this.addJSON("json_signal_C89F4", `{ "status": "ok" }`);
    this.trigger("test_signal_C89F4");
  }

  test_signal_C89F4(_, el) {
    const result = this.loadJSON("json_signal_C89F4");
    if (result.ok === true) {
      el.innerHTML = this.json["json_signal_C89F4"].status;
    }
  }
};

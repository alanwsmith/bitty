window.ClassC89F4 = class {
  bittyReady() {
    this.trigger("given_signal_C89F4");
  }

  given_signal_C89F4(_, __) {
    this.createJSON("json_signal_C89F4", `{ "status": "ok" }`);
    delete this.json["json_signal_C89F4"];
    this.trigger("test_signal_C89F4");
  }

  test_signal_C89F4(_, el) {
    const result = this.loadJSON("json_signal_C89F4");
    if (result.ok === true) {
      el.innerHTML = this.json["json_signal_C89F4"].status;
    }
  }
};

window.Class92D8A = class {
  bittyReady() {
    this.trigger("given_signal_92D8A");
  }

  given_signal_92D8A(_, __) {
    this.setLogLevel("none");
    this.createJSON(
      "json_signal_92D8A",
      { status: "ok" },
    );
    this.trigger("test_signal_92D8A");
  }

  test_signal_92D8A(_, el) {
    const result = this.loadJSON("json_signal_92D8A");
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = this.json["json_signal_92D8A"].status;
    }
  }
};

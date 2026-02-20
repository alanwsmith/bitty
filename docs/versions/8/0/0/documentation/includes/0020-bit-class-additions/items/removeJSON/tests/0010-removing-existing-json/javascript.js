window.Class926B8 = class {
  bittyReady() {
    this.trigger("given_signal_926B8");
  }

  given_signal_926B8(_, __) {
    this.addJSON("data_signal_926B8", `{}`);
    this.trigger("test_signal_926B8");
  }

  test_signal_926B8(_, el) {
    this.removeJSON("data_signal_926B8");
    if (this.json["data_signal_926B8"] === undefined) {
      el.innerHTML = "ok";
    }
  }
};

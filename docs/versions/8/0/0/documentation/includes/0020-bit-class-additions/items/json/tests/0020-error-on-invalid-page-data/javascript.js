window.Class60787 = class {
  bittyReady() {
    this.trigger("given_signal_60787");
  }

  given_signal_60787(_, __) {
    this.trigger("test_signal_60787");
  }

  test_signal_60787(_, el) {
    if (this.json["data_signal_60787"] === undefined) {
      el.innerHTML = "ok";
    }
  }
};

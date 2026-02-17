window.Class56DEB = class {
  bittyReady() {
    this.trigger("given_signal_56DEB");
  }

  given_signal_56DEB(_, __) {
    this.trigger("test_signal_56DEB");
  }

  test_signal_56DEB(_, el) {
    if (this.json["data_signal_56DEB"] === undefined) {
      el.innerHTML = "ok";
    }
  }
};

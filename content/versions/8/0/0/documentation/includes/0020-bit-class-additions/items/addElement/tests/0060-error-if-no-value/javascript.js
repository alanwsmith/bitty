window.Class8DF02 = class {
  bittyReady() {
    this.trigger("given_signal_8DF02");
  }

  given_signal_8DF02(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_8DF02");
  }

  test_signal_8DF02(_, el) {
    const result = this.addElement("el_signal_8DF02");
    if (result.level === "error") {
      el.innerHTML = "ok";
    }
  }
};

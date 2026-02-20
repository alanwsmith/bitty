window.Class73040 = class {
  bittyReady() {
    this.trigger("given_signal_73040");
  }

  given_signal_73040(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_73040");
  }

  test_signal_73040(_, el) {
    const result = this.addElement("el_signal_73040");
    if (result.level === "error") {
      //el.innerHTML = "ok";
    }
  }
};

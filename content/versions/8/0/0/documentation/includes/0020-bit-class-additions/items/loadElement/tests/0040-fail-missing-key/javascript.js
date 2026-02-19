window.Class94D78 = class {
  #key = "el_signal_94D78";

  bittyReady() {
    this.trigger("given_signal_94D78");
  }

  given_signal_94D78(_, __) {
    this.setLogLevel("none");
    this.removeElement("el_signal_94D78");
    this.trigger("test_signal_94D78");
  }

  test_signal_94D78(_, el) {
    const result = this.loadElement("el_signal_94D78");
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }
};

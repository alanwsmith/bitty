window.Class194AD = class {
  bittyReady() {
    this.trigger("given_signal_194AD");
  }

  given_signal_194AD(_, __) {
    this.setLogLevel("none");
    localStorage.removeItem("missing_key_signal_194AD");
    this.trigger("test_signal_194AD");
  }

  test_signal_194AD(_, el) {
    const result = this.loadJSON("missing_key_signal_194AD");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

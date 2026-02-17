window.ClassD89BE = class {
  bittyReady() {
    this.trigger("given_signal_D89BE");
  }

  given_signal_D89BE(_, __) {
    this.logLevel = 0;
    localStorage.removeItem("missing_key_signal_D89BE");
    this.trigger("test_signal_D89BE");
  }

  test_signal_D89BE(_, el) {
    const result = this.loadJSON("missing_key_signal_D89BE");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }
};

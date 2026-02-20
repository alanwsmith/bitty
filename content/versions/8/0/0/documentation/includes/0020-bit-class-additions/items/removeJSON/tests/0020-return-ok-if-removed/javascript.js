window.Class5E09F = class {
  bittyReady() {
    this.trigger("given_signal_5E09F");
  }

  given_signal_5E09F(_, __) {
    this.createJSON("data_signal_5E09F", `{}`);
    this.trigger("test_signal_5E09F");
  }

  test_signal_5E09F(_, el) {
    const result = this.deleteJSON("data_signal_5E09F");
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }
};

window.Class53DF8 = class {
  #key = "fragment_signal_53DF8";

  test_signal_53DF8(_, el) {
    const result = this.deleteFragment(this.#key);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_53DF8");
  }

  given_signal_53DF8(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, "<div></div>");
    this.trigger("test_signal_53DF8");
  }
};

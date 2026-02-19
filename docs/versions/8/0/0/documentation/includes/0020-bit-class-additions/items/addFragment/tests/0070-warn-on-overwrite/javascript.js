window.Class45911 = class {
  #key = "fragment_signal_45911";

  test_signal_45911(_, el) {
    const result = this.addFragment(this.#key, `<div></div>`);
    if (result.ok === true && result.level === "warn") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_45911");
  }

  given_signal_45911(_, __) {
    this.addFragment(this.#key, `<div></div>`);
    this.trigger("test_signal_45911");
  }
};

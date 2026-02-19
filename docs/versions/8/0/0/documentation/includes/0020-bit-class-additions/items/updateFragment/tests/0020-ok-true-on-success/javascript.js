window.ClassFAB09 = class {
  #key = "fragment_signal_FAB09";

  test_signal_FAB09(_, el) {
    const result = this.updateFragment(this.#key, `<div>x</div><div>ok</div>`);
    if (result.ok === true && result.level === "info") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_FAB09");
  }

  given_signal_FAB09(_, __) {
    this.trigger("test_signal_FAB09");
  }
};

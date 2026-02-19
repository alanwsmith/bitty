window.Class40096 = class {
  #key = "fragment_signal_40096";

  test_signal_40096(_, el) {
    const result = this.addFragment(this.#key, `<div>x</div><div>ok</div>`);
    if (result.ok === true && result.level === "info") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_40096");
  }

  given_signal_40096(_, __) {
    this.trigger("test_signal_40096");
  }
};

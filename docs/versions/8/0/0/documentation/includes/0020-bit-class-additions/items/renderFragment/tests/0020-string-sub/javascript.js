window.Class1BEA7 = class {
  #key = "fragment_signal_1BEA7";

  test_signal_1BEA7(_, el) {
    const subs = {
      "TARGET_1BEA7": "ok",
    };
    const fragment = this.renderFragment(this.#key, subs);
    el.innerHTML = fragment.children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_1BEA7");
  }

  given_signal_1BEA7(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, `<div></div><div>TARGET_1BEA7</div>`);
    this.trigger("test_signal_1BEA7");
  }
};

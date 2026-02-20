window.ClassB1C55 = class {
  #key = "fragment_signal_B1C55";

  test_signal_B1C55(_, el) {
    const replacementEl = document.createElement("div");
    replacementEl.innerHTML = "ok";
    const subs = {
      "TARGET_B1C55": replacementEl,
    };
    const fragment = this.renderFragment(this.#key, subs);
    //    el.innerHTML = fragment.firstChild.firstChild.innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_B1C55");
  }

  given_signal_B1C55(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, `<div>TARGET_B1C55</div>`);
    this.trigger("test_signal_B1C55");
  }
};

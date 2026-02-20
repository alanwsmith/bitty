window.Class69387 = class {
  #key = "fragment_signal_69387";

  test_signal_69387(_, el) {
    const replacementEl = document.createElement("div");
    replacementEl.innerHTML = "ok";
    const replacementEl2 = document.createElement("div");
    replacementEl2.innerHTML = "ok";
    const replacementArray = [
      replacementEl,
      replacementEl2,
    ];
    const subs = {
      "TARGET_69387": replacementArray,
    };
    const fragment = this.renderFragment(this.#key, subs);
    //    el.innerHTML = fragment.firstChild.children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_69387");
  }

  given_signal_69387(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, `<div>TARGET_69387</div>`);
    this.trigger("test_signal_69387");
  }
};

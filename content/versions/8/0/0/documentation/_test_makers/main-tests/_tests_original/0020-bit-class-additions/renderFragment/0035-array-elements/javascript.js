window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const replacementEl = document.createElement("div");
    replacementEl.innerHTML = "ok";
    const replacementEl2 = document.createElement("div");
    replacementEl2.innerHTML = "ok";
    const replacementArray = [
      replacementEl,
      replacementEl2,
    ];
    const subs = {
      "TARGET_$HASH": replacementArray,
    };
    const fragment = this.renderFragment(this.#key, subs);
    el.innerHTML = fragment.firstChild.children[1].innerHTML;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.setLogLevel("none");
    this.createFragment(this.#key, `<div>TARGET_$HASH</div>`);
    this.trigger("test_$SIGNAL_NAME");
  }
};

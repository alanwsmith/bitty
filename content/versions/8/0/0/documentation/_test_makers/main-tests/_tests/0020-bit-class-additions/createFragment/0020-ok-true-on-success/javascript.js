window.$CLASS_NAME = class {
  #key = "fragment_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const result = this.createFragment(this.#key, `<div>x</div><div>ok</div>`);
    if (result.ok === true && result.level === "info") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_$SIGNAL_NAME");
  }
};

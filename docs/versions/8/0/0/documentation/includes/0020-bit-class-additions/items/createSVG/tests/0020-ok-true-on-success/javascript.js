window.Class7F796 = class {
  #key = "fragment_signal_7F796";

  test_signal_7F796(_, el) {
    const result = this.createFragment(this.#key, `<div>x</div><div>ok</div>`);
    if (result.ok === true && result.level === "info") {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_7F796");
  }
};

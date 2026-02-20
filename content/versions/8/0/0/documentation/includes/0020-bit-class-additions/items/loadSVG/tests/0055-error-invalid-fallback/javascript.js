window.Class609BD = class {
  #key = "fragment_signal_609BD";

  test_signal_609BD(_, el) {
    const result = this.loadFragment(this.#key, {
      misc: "objects are not valid fallbacks",
    });
    if (result.ok === false && result.level === "error") {
      //el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_609BD");
  }

  given_signal_609BD(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_609BD");
  }
};

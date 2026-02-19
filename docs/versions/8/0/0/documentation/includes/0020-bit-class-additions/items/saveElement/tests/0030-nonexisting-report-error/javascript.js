window.ClassE8235 = class {
  #key = "el_signal_E8235";

  test_signal_E8235(_, el) {
    const result = this.saveElement(this.#key);
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_E8235");
  }

  given_signal_E8235(_, __) {
    this.setLogLevel("none");
    this.trigger("test_signal_E8235");
  }
};

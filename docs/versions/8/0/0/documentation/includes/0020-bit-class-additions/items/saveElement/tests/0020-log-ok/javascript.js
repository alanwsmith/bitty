window.Class624C5 = class {
  #key = "el_signal_624C5";

  test_signal_624C5(_, el) {
    const result = this.saveElement(this.#key);
    if (result.ok === true && result.level === "info") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("given_signal_624C5");
  }

  given_signal_624C5(_, __) {
    this.addElement(this.#key, "<div>ok</div>");
    this.trigger("test_signal_624C5");
  }
};

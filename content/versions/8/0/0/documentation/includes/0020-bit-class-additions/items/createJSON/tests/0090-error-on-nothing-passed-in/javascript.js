window.Class45CAA = class {
  #key = "json_signal_45CAA";

  test_signal_45CAA(_, el) {
    const result = this.createJSON(this.#key);
    if (result.ok === false && result.level === "error") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.trigger("test_signal_45CAA");
  }
};

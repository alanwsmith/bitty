window.Class69E87 = class {
  #key = "json_signal_69E87";

  test_signal_69E87(_, el) {
    this.deleteJSON(this.#key);
    if (this.json[this.#key] === undefined) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.createJSON(this.#key, `{}`);
    this.trigger("test_signal_69E87");
  }
};

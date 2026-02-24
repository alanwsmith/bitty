window.$CLASS_NAME = class {
  #key = "json_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    this.deleteJSON(this.#key);
    const result = this.loadJSON(this.#key);
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.createJSON(this.#key, `{}`);
    this.trigger("test_$SIGNAL_NAME");
  }
};

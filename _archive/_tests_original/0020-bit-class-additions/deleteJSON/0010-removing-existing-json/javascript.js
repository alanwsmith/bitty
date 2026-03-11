window.$CLASS_NAME = class {
  #key = "json_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
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
    this.trigger("test_$SIGNAL_NAME");
  }
};

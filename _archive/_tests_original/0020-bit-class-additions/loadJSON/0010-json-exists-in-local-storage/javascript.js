window.$CLASS_NAME = class {
  #key = "json_$SIGNAL_NAME";

  test_$SIGNAL_NAME(_, el) {
    const result = this.loadJSON(this.#key);
    if (result.ok === true) {
      el.innerHTML = this.json[this.#key].status;
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.createJSON(this.#key, { status: "ok" });
    delete this.json[this.#key];
    this.trigger("test_$SIGNAL_NAME");
  }
};

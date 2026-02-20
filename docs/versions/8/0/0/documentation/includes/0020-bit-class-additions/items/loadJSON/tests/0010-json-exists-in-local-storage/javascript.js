window.ClassC89F4 = class {
  #key = "json_signal_C89F4";

  test_signal_C89F4(_, el) {
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
    this.trigger("test_signal_C89F4");
  }
};

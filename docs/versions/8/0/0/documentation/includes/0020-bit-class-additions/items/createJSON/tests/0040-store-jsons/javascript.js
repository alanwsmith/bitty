window.Class41D2B = class {
  #key = "json_signal_41D2B";

  test_signal_41D2B(_, el) {
    el.innerHTML = this.json[this.#key].status;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.deleteJSON(this.#key);
    this.createJSON(this.#key, { status: "ok" });
    delete this.json[this.#key];
    this.trigger("test_signal_41D2B");
  }
};

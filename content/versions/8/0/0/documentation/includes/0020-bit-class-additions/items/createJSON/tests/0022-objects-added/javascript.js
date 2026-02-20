window.ClassC2FB6 = class {
  #key = "json_signal_C2FB6";

  test_signal_C2FB6(_, el) {
    const jsObject = { "status": "ok" };
    this.createJSON(this.#key, jsObject);
    el.innerHTML = this.json[this.#key].status;
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_C2FB6");
  }
};

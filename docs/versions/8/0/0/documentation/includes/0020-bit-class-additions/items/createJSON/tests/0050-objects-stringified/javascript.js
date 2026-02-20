window.Class09A88 = class {
  #key = "json_signal_09A88";

  test_signal_09A88(_, el) {
    const jsObject = { method_09A88: () => {} };
    this.createJSON(this.#key, jsObject);
    if (this.json[this.#key].method_09A88 === undefined) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_09A88");
  }
};

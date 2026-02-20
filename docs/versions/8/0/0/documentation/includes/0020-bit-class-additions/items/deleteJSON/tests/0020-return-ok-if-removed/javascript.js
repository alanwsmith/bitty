window.Class97846 = class {
  #key = "json_signal_97846";

  test_signal_97846(_, el) {
    const result = this.deleteJSON(this.#key);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.createJSON(this.#key, `{}`);
    this.trigger("test_signal_97846");
  }
};

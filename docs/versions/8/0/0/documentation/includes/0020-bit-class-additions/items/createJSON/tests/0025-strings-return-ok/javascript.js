window.ClassF264E = class {
  #key = "json_signal_F264E";

  test_signal_F264E(_, el) {
    const jsonString = `{}`;
    const result = this.createJSON(this.#key, jsonString);
    if (result.ok === true) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_F264E");
  }
};

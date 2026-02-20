window.Class2B80D = class {
  #key = "json_signal_2B80D";

  test_signal_2B80D(_, el) {
    const invalidJSON = "this is not valid JSON";
    const result = this.createJSON(this.#key, invalidJSON);
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.trigger("test_signal_2B80D");
  }
};

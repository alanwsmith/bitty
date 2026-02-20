window.Class0E048 = class {
  #key = "json_signal_0E048";

  test_signal_0E048(_, el) {
    const result = this.saveJSON("no-key-with-this-name");
    if (result.ok === false) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.trigger("test_signal_0E048");
  }
};

window.Class05EDE = class {
  test_signal_05EDE(_, el) {
    if (el.getValueAsInt() === 9000) {
      this.trigger("verify_signal_05EDE");
    }
  }

  verify_signal_05EDE(_, el) {
    el.innerHTML = "ok";
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_05EDE");
  }
};

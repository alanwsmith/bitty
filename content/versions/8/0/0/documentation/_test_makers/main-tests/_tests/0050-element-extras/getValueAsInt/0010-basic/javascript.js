window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(_, el) {
    if (el.getValueAsInt() === 9000) {
      this.trigger("verify_$SIGNAL_NAME");
    }
  }

  verify_$SIGNAL_NAME(_, el) {
    el.innerHTML = "ok";
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_$SIGNAL_NAME");
  }
};

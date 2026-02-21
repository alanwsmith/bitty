window.ClassC502D = class {
  test_signal_C502D(_, el) {
    if (el.getValueAsFloat() === 47.28) {
      this.trigger("verify_signal_C502D");
    }
  }

  verify_signal_C502D(_, el) {
    el.innerHTML = "ok";
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_C502D");
  }
};

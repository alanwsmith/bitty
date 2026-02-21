window.ClassBEA93 = class {
  test_signal_BEA93(_, el) {
    if (el.getValue() === "ok") {
      this.trigger("verify_signal_BEA93");
    }
  }

  verify_signal_BEA93(_, el) {
    el.innerHTML = "ok";
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_BEA93");
  }
};

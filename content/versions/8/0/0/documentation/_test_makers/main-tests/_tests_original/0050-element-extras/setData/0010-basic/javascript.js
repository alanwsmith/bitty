window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(_, el) {
    el.setData("updated", "ok");
    this.trigger("verify_$SIGNAL_NAME");
  }

  verify_$SIGNAL_NAME(_, el) {
    el.innerHTML = el.getData("updated");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_$SIGNAL_NAME");
  }
};

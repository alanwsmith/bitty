window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(_, el) {
    el.innerHTML = el.getData("needle");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_$SIGNAL_NAME");
  }
};

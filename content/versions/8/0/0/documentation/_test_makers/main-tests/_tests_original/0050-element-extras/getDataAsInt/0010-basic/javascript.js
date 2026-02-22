window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(_, el) {
    if (el.getDataAsInt("needle") === 3030) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_$SIGNAL_NAME");
  }
};

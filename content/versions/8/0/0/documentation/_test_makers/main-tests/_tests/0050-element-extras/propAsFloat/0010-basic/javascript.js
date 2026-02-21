window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(_, el) {
    if (el.propAsFloat("needle") === 8.2) {
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

window.Class66809 = class {
  test_signal_66809(_, el) {
    el.innerHTML = el.getData("needle");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_66809");
  }
};

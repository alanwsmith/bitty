window.Class3444A = class {
  test_signal_3444A(_, el) {
    el.innerHTML = el.prop("needle");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_3444A");
  }
};

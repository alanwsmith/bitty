window.Class53E81 = class {
  test_signal_53E81(_, el) {
    if (el.getDataAsFloat("needle") === 8.2) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_53E81");
  }
};

window.Class8AF41 = class {
  test_signal_8AF41(_, el) {
    if (el.propAsFloat("needle") === 8.2) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_8AF41");
  }
};

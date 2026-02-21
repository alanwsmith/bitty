window.ClassD02B2 = class {
  test_signal_D02B2(_, el) {
    if (el.propAsInt("needle") === 3030) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.trigger("test_signal_D02B2");
  }
};

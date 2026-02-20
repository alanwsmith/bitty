window.ClassDECD9 = class {
  #key = "svg_signal_DECD9";

  test_signal_DECD9(_, el) {
    const result = this.createSVG();
    if (result.ok === false && result.level === "error") {
      //      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    this.setLogLevel("none");
    this.trigger("test_signal_DECD9");
  }
};

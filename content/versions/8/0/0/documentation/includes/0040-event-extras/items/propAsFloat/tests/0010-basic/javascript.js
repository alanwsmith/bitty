window.Class118BB = class {
  test_signal_118BB(ev, el) {
    if (ev.propAsFloat("needle") === 1.1) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-118BB").click();
  }
};

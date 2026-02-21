window.Class0CF9A = class {
  test_signal_0CF9A(ev, el) {
    if (ev.getTargetValueAsInt("needle") === 9) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-0CF9A").click();
  }
};

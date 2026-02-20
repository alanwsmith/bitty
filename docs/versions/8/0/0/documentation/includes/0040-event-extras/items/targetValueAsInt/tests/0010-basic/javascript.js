window.Class5569A = class {
  test_signal_5569A(ev, el) {
    if (ev.targetValueAsInt("needle") === 9) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-5569A").click();
  }
};

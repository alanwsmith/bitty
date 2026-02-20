window.Class68366 = class {
  test_signal_68366(ev, el) {
    if (ev.targetValueAsFloat("needle") === 7.8) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-68366").click();
  }
};

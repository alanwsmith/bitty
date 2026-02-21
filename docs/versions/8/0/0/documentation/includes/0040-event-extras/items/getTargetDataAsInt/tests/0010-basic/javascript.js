window.Class727C1 = class {
  test_signal_727C1(ev, el) {
    if (ev.getTargetDataAsInt("needle") === 4) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-727C1").click();
  }
};

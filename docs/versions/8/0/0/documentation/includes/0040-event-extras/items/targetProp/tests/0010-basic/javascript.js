window.ClassF7F9E = class {
  test_signal_F7F9E(ev, el) {
    el.innerHTML = ev.targetProp("needle");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-F7F9E").click();
  }
};

window.Class290C3 = class {
  test_signal_290C3(ev, el) {
    el.innerHTML = ev.getData("needle");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-290C3").click();
  }
};

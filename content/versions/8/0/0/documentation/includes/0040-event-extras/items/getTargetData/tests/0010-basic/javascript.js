window.Class2500D = class {
  test_signal_2500D(ev, el) {
    el.innerHTML = ev.getTargetData("needle");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-2500D").click();
  }
};

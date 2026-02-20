window.ClassC4D2B = class {
  test_signal_C4D2B(ev, el) {
    el.innerHTML = ev.prop("needle");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-C4D2B").click();
  }
};

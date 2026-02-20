window.ClassF0E2D = class {
  test_signal_F0E2D(ev, el) {
    if (ev.valueAsFloat() === 2.2) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-F0E2D").click();
  }
};

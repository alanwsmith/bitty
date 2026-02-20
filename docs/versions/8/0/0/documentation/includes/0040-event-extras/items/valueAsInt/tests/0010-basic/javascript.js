window.ClassF3F57 = class {
  test_signal_F3F57(ev, el) {
    if (ev.valueAsInt() === 2) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-F3F57").click();
  }
};

window.ClassEB8D8 = class {
  test_signal_EB8D8(ev, el) {
    if (ev.getValueAsFloat() === 2.2) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-EB8D8").click();
  }
};

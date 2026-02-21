window.Class7B9F6 = class {
  test_signal_7B9F6(ev, el) {
    if (ev.getDataAsFloat("needle") === 1.1) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-7B9F6").click();
  }
};

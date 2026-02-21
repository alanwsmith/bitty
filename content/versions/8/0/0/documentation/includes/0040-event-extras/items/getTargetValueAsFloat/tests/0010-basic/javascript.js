window.Class9DFEC = class {
  test_signal_9DFEC(ev, el) {
    if (ev.getTargetValueAsFloat("needle") === 7.8) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-9DFEC").click();
  }
};

window.Class82B07 = class {
  test_signal_82B07(ev, el) {
    if (ev.propAsInt("needle") === 1) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-82B07").click();
  }
};

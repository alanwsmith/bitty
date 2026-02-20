window.Class072F8 = class {
  test_signal_072F8(ev, el) {
    if (ev.targetPropAsInt("needle") === 4) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-072F8").click();
  }
};

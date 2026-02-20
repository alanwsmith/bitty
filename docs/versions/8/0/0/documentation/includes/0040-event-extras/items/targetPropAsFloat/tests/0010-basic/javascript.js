window.Class56ECF = class {
  test_signal_56ECF(ev, el) {
    if (ev.targetPropAsFloat("needle") === 3.4) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-56ECF").click();
  }
};

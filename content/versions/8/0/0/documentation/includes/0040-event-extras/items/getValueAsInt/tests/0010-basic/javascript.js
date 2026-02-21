window.ClassE554E = class {
  test_signal_E554E(ev, el) {
    if (ev.getValueAsInt() === 2) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-E554E").click();
  }
};

window.Class45333 = class {
  test_signal_45333(_, el) {
    if (el.isTarget() === true) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-45333").click();
  }
};

window.ClassCE356 = class {
  test_signal_CE356(_, el) {
    if (el.isSender() === true) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-CE356").click();
  }
};

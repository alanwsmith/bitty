window.ClassE685E = class {
  test_signal_E685E(ev, el) {
    if (ev.getTargetValue("needle") === "value_E685E") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-E685E").click();
  }
};

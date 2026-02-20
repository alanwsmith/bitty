window.Class9DFE6 = class {
  test_signal_9DFE6(ev, el) {
    if (ev.targetValue("needle") === "value_9DFE6") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-9DFE6").click();
  }
};

window.ClassF1196 = class {
  test_signal_F1196(ev, el) {
    if (ev.sender.dataset.needle === "value_F1196") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-F1196").click();
  }
};

window.Class513DE = class {
  test_signal_513DE(ev, el) {
    if (ev.sender.dataset.needle === "value_513DE") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-513DE").click();
  }
};

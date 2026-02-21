window.Class8F115 = class {
  test_signal_8F115(ev, el) {
    if (ev.sender.dataset.needle === "value_8F115") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-8F115").click();
  }
};

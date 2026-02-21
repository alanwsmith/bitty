window.Class728A9 = class {
  test_signal_728A9(ev, _) {
    ev.setTargetData("updated", "ok");
    this.trigger("verify_signal_728A9");
  }

  verify_signal_728A9(_, el) {
    el.innerHTML = el.getData("updated");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-728A9").click();
  }
};

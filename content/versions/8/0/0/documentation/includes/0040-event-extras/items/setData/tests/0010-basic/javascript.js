window.Class802EB = class {
  test_signal_802EB(ev, _) {
    ev.setData("updated", "ok");
    this.trigger("verify_signal_802EB");
  }

  verify_signal_802EB(_, el) {
    el.innerHTML = el.getData("updated");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-802EB").click();
  }
};

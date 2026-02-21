window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(ev, _) {
    ev.setTargetData("updated", "ok");
    this.trigger("verify_$SIGNAL_NAME");
  }

  verify_$SIGNAL_NAME(_, el) {
    el.innerHTML = el.getData("updated");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#$STYLE_NAME").click();
  }
};

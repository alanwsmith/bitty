window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(ev, el) {
    if (ev.getValueAsInt() === 2) {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#$STYLE_NAME").click();
  }
};

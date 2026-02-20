window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(ev, el) {
    if (ev.targetValueAsFloat("needle") === 7.8) {
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

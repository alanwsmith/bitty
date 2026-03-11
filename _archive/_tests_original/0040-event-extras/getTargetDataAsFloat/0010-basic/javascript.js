window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(ev, el) {
    if (ev.getTargetDataAsFloat("needle") === 3.4) {
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

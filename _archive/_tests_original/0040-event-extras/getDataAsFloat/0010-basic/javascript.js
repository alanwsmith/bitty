window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(ev, el) {
    if (ev.getDataAsFloat("needle") === 1.1) {
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

window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(ev, el) {
    el.innerHTML = ev.getData("needle");
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#$STYLE_NAME").click();
  }
};

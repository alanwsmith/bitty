window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(_, el) {
    if (el.isSender() === true) {
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

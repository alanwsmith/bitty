window.$CLASS_NAME = class {
  test_$SIGNAL_NAME(ev, el) {
    console.log(ev);
    if (ev.sender.dataset.needle === "value_$HASH") {
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

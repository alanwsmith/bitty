window.Class614B3 = class {
  test_signal_614B3(ev, el) {
    if (ev.value() === "value_614B3") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-614B3").click();
  }
};

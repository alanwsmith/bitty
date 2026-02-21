window.ClassBC630 = class {
  test_signal_BC630(ev, el) {
    if (ev.getValue() === "value_BC630") {
      el.innerHTML = "ok";
    }
  }

  /////////////////////////////////////////////////
  // Test Setup
  /////////////////////////////////////////////////

  bittyReady() {
    document.querySelector("#el-BC630").click();
  }
};

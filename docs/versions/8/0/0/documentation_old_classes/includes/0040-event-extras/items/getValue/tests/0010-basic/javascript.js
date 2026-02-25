signal_BC630(ev, el) {
  if (ev.getValue() === "value_BC630") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#el-BC630").click();
}
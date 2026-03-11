signal_E554E(ev, el) {
  if (ev.getValueAsInt() === 2) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#el-E554E").click();
}
signal_EB8D8(ev, el) {
  if (ev.getValueAsFloat() === 2.2) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#el-EB8D8").click();
}
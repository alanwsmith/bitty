signal_0CF9A(ev, el) {
  if (ev.getTargetValueAsInt("needle") === 9) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#el-0CF9A").click();
}
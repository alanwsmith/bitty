signal_45333(_, el) {
  if (el.isTarget() === true) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#el-45333").click();
}
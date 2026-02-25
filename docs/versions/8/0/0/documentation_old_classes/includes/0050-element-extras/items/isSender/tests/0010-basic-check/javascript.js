signal_CE356(_, el) {
  if (el.isSender() === true) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#el-CE356").click();
}
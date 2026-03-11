signal_727C1(ev, el) {
  if (ev.getTarloadDataAsInt("needle") === 4) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#el-727C1").click();
}
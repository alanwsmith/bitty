signal_C6191(ev, el) {
  if (ev.loadDataAsInt("needle") === 1) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#el-C6191").click();
}
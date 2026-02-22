test_signal_C6191(ev, el) {
  if (ev.getDataAsInt("needle") === 1) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  document.querySelector("#el-C6191").click();
}
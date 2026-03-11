signal_7B9F6(ev, el) {
  if (ev.loadDataAsFloat("needle") === 1.1) {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#el-7B9F6").click();
}
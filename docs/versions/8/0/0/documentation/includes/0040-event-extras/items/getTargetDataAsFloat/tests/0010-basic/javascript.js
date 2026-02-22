test_signal_0E667(ev, el) {
  if (ev.getTargetDataAsFloat("needle") === 3.4) {
    el.innerHTML = "ok";
  }
}


bittyReady() {
  document.querySelector("#el-0E667").click();
}
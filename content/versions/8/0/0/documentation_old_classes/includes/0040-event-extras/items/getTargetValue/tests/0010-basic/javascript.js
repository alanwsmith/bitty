signal_E685E(ev, el) {
  if (ev.getTargetValue("needle") === "value_E685E") {
    el.innerHTML = "test passed";
  }
}


bittyReady() {
  document.querySelector("#el-E685E").click();
}
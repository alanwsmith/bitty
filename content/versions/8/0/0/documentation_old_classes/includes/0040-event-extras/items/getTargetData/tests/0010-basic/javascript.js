signal_2500D(ev, el) {
  el.innerHTML = ev.getTarloadData("needle");
}


bittyReady() {
  document.querySelector("#el-2500D").click();
}
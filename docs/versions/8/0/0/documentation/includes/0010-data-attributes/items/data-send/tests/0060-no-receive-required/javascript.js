bittyReady() {
  document.querySelector("#el-0773E").click();
}

signal_0773E(_, __) {
  this.trigger("verify_signal_0773E");
}

verify_signal_0773E(_, el) {
  el.innerHTML = "ok";
}
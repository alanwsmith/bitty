bittyReady() {
  this.trigger("run_signal_E01A5 verify_signal_E01A5");
}

run_signal_E01A5(_, el) {
  this.setCSS("--el-E01A5", "crimson");
}

verify_signal_E01A5(_, el) {
  const gotValue = document
    .documentElement
    .style
    .getPropertyValue("--el-E01A5");
  if (gotValue === "crimson") {
    el.innerHTML = "test passed";
  }
}
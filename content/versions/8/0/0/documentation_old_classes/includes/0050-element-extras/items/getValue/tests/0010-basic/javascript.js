signal_BEA93(_, el) {
  if (el.getValue() === "test passed") {
    this.trigger("verify_signal_BEA93");
  }
}

verify_signal_BEA93(_, el) {
  el.innerHTML = "test passed";
}


bittyReady() {
  this.trigger("signal_BEA93");
}
signal_BEA93(_, el) {
  if (el.getValue() === "ok") {
    this.trigger("verify_signal_BEA93");
  }
}

verify_signal_BEA93(_, el) {
  el.innerHTML = "ok";
}


bittyReady() {
  this.trigger("signal_BEA93");
}
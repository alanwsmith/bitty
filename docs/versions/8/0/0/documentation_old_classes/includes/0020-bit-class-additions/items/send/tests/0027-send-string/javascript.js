bittyReady() {
  this.send("test passed", "signal_31AF8");
}

signal_31AF8(payload, el) {
  el.innerHTML = payload;
}
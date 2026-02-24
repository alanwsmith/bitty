async bittyReady() {
  this.addSignalListener("customevent1D1AB", "signal_1D1AB");
  this.sleep(100);
  const targetEvent = new CustomEvent1D1AB();
  dispatchEvent(targetEvent);
}

signal_1D1AB(_, el) {
  el.innerHTML = "test passed";
}

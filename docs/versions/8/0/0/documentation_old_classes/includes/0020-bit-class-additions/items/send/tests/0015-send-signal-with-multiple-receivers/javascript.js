bittyReady() {
  this.send({ status: "test passed" }, "signal_138D4");
}

signal_138D4(payload, el) {
  el.innerHTML = payload.status;
}
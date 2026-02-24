bittyReady() {
  this.send({ status: "test passed" }, "signal_DFC26");
}

signal_DFC26(payload, el) {
  el.innerHTML = payload.status;
}
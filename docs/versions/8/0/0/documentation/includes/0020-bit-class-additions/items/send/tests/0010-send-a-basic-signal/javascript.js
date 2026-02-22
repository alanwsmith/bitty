bittyReady() {
  this.send({ status: "ok" }, "signal_DFC26");
}

signal_DFC26(payload, el) {
  el.innerHTML = payload.status;
}